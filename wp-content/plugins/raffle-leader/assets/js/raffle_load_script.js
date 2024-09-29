document.addEventListener("DOMContentLoaded", () => {
  const raffleContainer = document.getElementById(
    "raffleleader-raffle-container"
  );
  const raffleID = raffleContainer.getAttribute("data-raffle-id");

  const viewportWidth = window.innerWidth;

  const raffleLoaded = new CustomEvent("raffleLoaded");

  if (raffleID) {
    const timestamp = new Date().getTime();
    const url = new URL(
      raffleleader_load_raffle_object.ajax_url + "?_=" + timestamp
    );
    url.searchParams.append("action", "loadRaffleData");
    url.searchParams.append("raffle_id", raffleID);
    url.searchParams.append(
      "security",
      raffleleader_load_raffle_object.security
    );

    fetch(url, {
      credentials: "same-origin", // This ensures cookies are sent with the request
    })
      .then((response) => {
        if (!response.ok) {
          return response.text().then((text) => {
            throw new Error(
              `Network response was not ok (${response.status}): ${text}`
            );
          });
        }
        return response.json();
      })
      .then((data) => {
        console.log("Received raffle data");
        loadPreview(data);
        loadDateAndTimeAndCounters(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.message.includes("403")) {
          // If it's a 403 error, try refreshing the nonce
          refreshNonce()
            .then(() => {
              // Retry the fetch with the new nonce
              loadRaffleData();
            })
            .catch((refreshError) => {
              console.error("Error refreshing nonce:", refreshError);
              raffleContainer.innerHTML = `<p>Error loading raffle data. Please try refreshing the page. Error: ${error.message}</p>`;
            });
        } else {
          raffleContainer.innerHTML = `<p>Error loading raffle data. Please try refreshing the page. Error: ${error.message}</p>`;
        }
      });
  } else {
    console.error("No raffle ID found");
    raffleContainer.innerHTML = "<p>Error: No raffle ID provided.</p>";
  }

  function refreshNonce() {
    return fetch(raffleleader_load_raffle_object.ajax_url, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: "action=refresh_nonce",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          raffleleader_load_raffle_object.security = data.data.new_nonce;
        } else {
          throw new Error("Failed to refresh nonce");
        }
      });
  }

  function loadPreview(raffleData) {
    // Bulk preview data
    if (raffleData.content) {
      if (viewportWidth <= 400) {
        raffleContainer.style.transform = "scale(0.6)";
      } else if (viewportWidth <= 600) {
        raffleContainer.style.transform = "scale(0.8)";
      } else if (viewportWidth <= 1000) {
        raffleContainer.style.transform = "scale(0.9)";
      } else {
        raffleContainer.style.transform = "scale(1)";
      }

      let HTMLContent = raffleData.content;

      const raffleIdRegex = /id="(\d+)raffleID"/g;
      HTMLContent = HTMLContent.replace(
        raffleIdRegex,
        `id="${raffleID}raffleID"`
      );
      raffleContainer.innerHTML = HTMLContent;

      const preview = raffleContainer.querySelector(
        ".raffleleader-preview-box"
      );
      const dropzone = raffleContainer.querySelector(".raffleleader-dropzone");

      const entrySection = preview.querySelector(".raffleleader-entry-section");

      if (entrySection) {
        preview.style.position = "static";
        dropzone.style.position = "relative";

        const sections = preview.querySelectorAll(".raffleleader-section");
        sections.forEach((section) => {
          section.style.position = null;
        });

        const emailInput = entrySection.querySelector(
          ".raffleleader-email-input"
        );
        const emailBtn = entrySection.querySelector(
          ".raffleleader-email-submit-btn"
        );

        const additionalEntrySections = document.querySelectorAll(
          ".raffleleader-additional-entry-section"
        );

        if (raffleData.status.includes("Starts")) {
          entrySection.classList.add("inactive-entry");
          emailInput.placeholder = "This raffle is starting soon";
          emailBtn.innerText = "⧗";
        } else if (raffleData.status.includes("Finished")) {
          entrySection.classList.add("inactive-entry");
          emailInput.placeholder = "This raffle has finished";
          emailBtn.innerText = "✓";

          additionalEntrySections.forEach((additionalEntrySection) => {
            additionalEntrySection.classList.add("inactive-additional-entry");
            additionalEntrySection.querySelector("button").innerHTML = "✓";
          });
        }

        const rulesAndTerms = document.querySelector(
          ".raffleleader-rules-and-terms"
        );
        rulesAndTerms.addEventListener("click", displayRulesAndTerms);

        const rulesAndTermsCloseBtn = document.querySelector(
          ".rules-and-terms-close-button"
        );
        rulesAndTermsCloseBtn.addEventListener("click", closeRulesAndTerms);

        document.dispatchEvent(raffleLoaded);
      } else {
        raffleContainer.innerHTML =
          "<p style='font-weight: bold;'>Raffles must have an email entry section to be published</p>";
      }
    }
  }

  function loadDateAndTimeAndCounters(raffleData) {
    // Load time data
    if (raffleData.startDate && raffleData.endDate) {
      const localStart = moment
        .tz(raffleData.startDate, "UTC")
        .tz(raffleData.timezone);

      const localEnd = moment
        .tz(raffleData.endDate, "UTC")
        .tz(raffleData.timezone);

      initializeCounters(
        localStart,
        localEnd,
        raffleData.timezone,
        raffleData.total_entries
      );
    }
  }

  function initializeCounters(startTime, endTime, timezone, totalEntries) {
    const now = moment();

    const timeLeftCounters = document.querySelectorAll(".show-time-left");
    timeLeftCounters.forEach((timeLeftCounter) => {
      watchTimeLeft(timeLeftCounter, endTime, now);
    });

    const timeStartCounters = document.querySelectorAll(".show-time-start");
    timeStartCounters.forEach((timeStartCounter) => {
      watchTimeStart(timeStartCounter, startTime, now);
    });

    // Since user entries can't be tracked until login, we'll update front end logic for it in the handleEmail hook

    const totalEntriesCounters = document.querySelectorAll(
      ".show-total-entries"
    );
    totalEntriesCounters.forEach((totalEntriesCounter) => {
      watchTotalEntries(totalEntriesCounter, totalEntries);
    });
  }

  function watchTimeLeft(element, endTime, nowTime) {
    const difference = endTime.diff(nowTime);
    const duration = moment.duration(difference);

    const counterHeader = element.querySelector("h2");
    const counterText = element.querySelector("p");

    if (duration.days() > 0) {
      counterHeader.innerText = `${duration.days()}`;
      counterText.innerText = "DAYS";
    } else if (duration.hours() > 0) {
      counterHeader.innerText = `${duration.hours()}`;
      counterText.innerText = "HOURS";
    } else if (duration.minutes() > 0) {
      counterHeader.innerText = `${duration.minutes()}`;
      counterText.innerText = "MINUTES";
    } else if (duration.seconds() > 0) {
      counterHeader.innerText = `${duration.seconds()}`;
      counterText.innerText = "SECONDS";
    } else {
      counterHeader.innerText = `00`;
      counterText.innerText = "ENDED";
    }
  }

  function watchTimeStart(element, startTime, nowTime) {
    const difference = startTime.diff(nowTime);
    const duration = moment.duration(difference);

    const counterHeader = element.querySelector("h2");
    const counterText = element.querySelector("p");

    if (duration.days() > 0) {
      counterHeader.innerText = `${duration.days()}`;
      counterText.innerText = "DAYS";
    } else if (duration.hours() > 0) {
      counterHeader.innerText = `${duration.hours()}`;
      counterText.innerText = "HOURS";
    } else if (duration.minutes() > 0) {
      counterHeader.innerText = `${duration.minutes()}`;
      counterText.innerText = "MINUTES";
    } else if (duration.seconds() > 0) {
      counterHeader.innerText = `${duration.seconds()}`;
      counterText.innerText = "SECONDS";
    } else {
      counterHeader.innerText = `00`;
      counterText.innerText = "STARTED";
    }
  }

  function watchTotalEntries(element, totalEntries) {
    const counterHeader = element.querySelector("h2");
    const counterText = element.querySelector("p");

    counterHeader.innerText = `${totalEntries}`;
    counterText.innerText = "TOTAL ENTRIES";
  }

  function displayRulesAndTerms() {
    const rulesAndTermsPreview = preview.querySelector(
      ".raffleleader-rules-and-terms-preview"
    );
    rulesAndTermsPreview.style.display = "";
  }

  function closeRulesAndTerms() {
    const rulesAndTermsPreview = preview.querySelector(
      ".raffleleader-rules-and-terms-preview"
    );
    rulesAndTermsPreview.style.display = "none";
  }
});
