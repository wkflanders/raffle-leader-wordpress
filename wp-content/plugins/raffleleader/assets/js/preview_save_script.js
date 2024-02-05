document.addEventListener("previewLoaded", () => {
  // State variables
  let isLoading = false;
  let selectedSection = null;
  let isSuccess = true;

  const saveBtn = document.querySelector(".save-btn");
  saveBtn.addEventListener("click", savePreview);

  const saveModal = document.getElementById("saveModal");
  const successModal = saveModal.querySelector(".success-modal-content");
  const failModal = saveModal.querySelector(".fail-modal-content");

  const preview = document.getElementById("preview");
  const endDateInput = document.getElementById('endDate');
  const endTimeInput = document.getElementById('endTime');
  const startDateInput = document.getElementById('startDate');
  const startTimeInput = document.getElementById('startTime');

  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get("post_id");

  async function savePreview() {
    isLoading = true;
    updateUI();
    const HTMLContent = preview.outerHTML;
    const cleanedHTMLContent = cleanHTML(HTMLContent);

    endDateValue = endDateInput.value;
    startDateValue = startDateInput.value;
    endTimeValue = endTimeInput.value;
    startTimeValue = startTimeInput.value;

    const endDateString = `${endDateValue}T${endTimeValue}`;
    const startDateString = `${startDateValue}T${startTimeValue}`;

    const endDate = new Date(endDateString);
    const startDate = new Date(startDateString);

    try {
      const response = await fetch(raffleleader_preview_save_object.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          action: "savePreview",
          post_id: postID,
          content: cleanedHTMLContent,
          start_date: startDate,
          end_date: endDate,
          security: raffleleader_preview_save_object.security,
        }),
      });
      const data = await response.json();

      console.log(data);

      if(!data.success){
        throw new Error(`$HTTP error: ${response.status}`);
      }

    } catch (error) {
      isSuccess = false;
      console.log(isSuccess);
      console.error("Fetch error", error);

    } finally {
      isLoading = false;
      updateUI();
    }
  }

  function updateUI() {
    const selectedSectionList = document.querySelectorAll(".selected-section");
    
    if (selectedSectionList.length > 0) {
      selectedSection = document.querySelector(".selected-section");
      resizeHandle = selectedSection.querySelector(".resize-handle");
    }

    if (isLoading) {
      saveBtn.innerHTML =
        '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
      if (selectedSection) {
        selectedSection.classList.remove("selected-section");
        resizeHandle.style.display = "none";
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
        selectedSection.classList.add("selected-section");
        resizeHandle.style.display = "block";
      }
    }
  }

  function cleanHTML(htmlString) {
    const regex = /transform:\s*scale\([^)]*\)/gi;

    return htmlString.replace(regex, "transform: scale(1.0);");
  }
});
