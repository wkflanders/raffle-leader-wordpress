document.addEventListener("generalSettingsLoaded", () => {
  // State variables
  let isLoading = false;
  let selectedSection = null;
  let isSuccess = true;

  const saveBtn = document.querySelector(".rl-builder-save-btn");
  saveBtn.addEventListener("click", savePreview);

  const saveModal = document.getElementById("saveModal");
  const successModal = saveModal.querySelector(".success-modal-content");
  const failModal = saveModal.querySelector(".fail-modal-content");

  const endDateInput = document.getElementById('endDate');
  const endTimeInput = document.getElementById('endTime');
  const startDateInput = document.getElementById('startDate');
  const startTimeInput = document.getElementById('startTime');
  const timezoneDisplay = document.getElementById('timeZoneDropDownTitle');

  const urlParams = new URLSearchParams(window.location.search);
  const raffleID = urlParams.get("raffle_id");

  async function savePreview() {
    isLoading = true;
    updateUI();
    const preview = document.getElementById("preview");
    const HTMLContent = preview.outerHTML;
    const cleanedHTMLContent = cleanHTML(HTMLContent);

    const endDateValue = endDateInput.value;
    const startDateValue = startDateInput.value;
    const endTimeValue = endTimeInput.value;
    const startTimeValue = startTimeInput.value;
    const timezoneValue = timezoneDisplay.textContent;

    const endDate = moment.tz(`${endDateValue}T${endTimeValue}`, timezoneValue).utc().format();
    const startDate = moment.tz(`${startDateValue}T${startTimeValue}`, timezoneValue).utc().format();

    try {
      const response = await fetch(raffleleader_preview_save_object.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          action: "savePreview",
          raffle_id: raffleID,
          content: cleanedHTMLContent,
          start_date: startDate,
          end_date: endDate,
          timezone: timezoneValue,
          security: raffleleader_preview_save_object.security,
        }),
      });
      const data = await response.json();

      if(!data.success){
        throw new Error(`$HTTP error: ${response.status}`);
      }

    } catch (error) {
      isSuccess = false;
      console.error("Fetch error", error);

    } finally {
      isLoading = false;
      updateUI();
    }
  }

  function updateUI() {
    const selectedSectionList = document.querySelectorAll(".selected-raffleleader-section");
    
    if (selectedSectionList.length > 0) {
      selectedSection = document.querySelector(".selected-raffleleader-section");
    }

    if (isLoading) {
      saveBtn.innerHTML =
        '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
      if (selectedSection) {
        const resizeHandles = selectedSection.querySelectorAll(".raffleleader-resize-handle");
        const handleContainer = selectedSection.querySelector(".raffleleader-layer-handle-container");
        selectedSection.classList.remove("selected-raffleleader-section");
        handleContainer.style.display = "none";
        resizeHandles.forEach(resizeHandle => resizeHandle.style.display = "none");
      }
    } else {
      saveBtn.innerHTML = "Save";

      if (isSuccess === true) {
        successModal.style.display = "block";
      } else {
        failModal.style.display = "block";
      }

      saveModal.style.animation = "slideDown 1s forwards";

      setTimeout(() => {
        saveModal.style.animation = "slideUp 1.5s forwards";
        setTimeout(() => {
          if (isSuccess) successModal.style.display = "none";
          if (!isSuccess) failModal.style.display = "none";
        }, 500);
      }, 5000);

      if (selectedSection) {
        selectedSection.classList.add("selected-raffleleader-section");
        const resizeHandles = selectedSection.querySelectorAll(".raffleleader-resize-handle");
        const handleContainer = selectedSection.querySelector(".raffleleader-layer-handle-container");
        handleContainer.style.display = "flex";
        resizeHandles.forEach(resizeHandle => resizeHandle.style.display = "block");
      }
    }
  }

  function cleanHTML(htmlString) {
    const transformRegex = /transform:\s*scale\([^)]*\)/gi;
    // const zIndexRegex = /z-index:\s*[^;]+/gi;

    let cleanedHTMLString = htmlString.replace(transformRegex, "transform: scale(1.0)");
    // cleanedHTMLString = cleanedHTMLString.replace(zIndexRegex, 'z-index: 10');

    return cleanedHTMLString
  }
});
