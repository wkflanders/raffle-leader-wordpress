document.addEventListener("previewLoaded", () => {
  // State variables
  let isLoading = false;
  let selectedSection = null;

  const saveBtn = document.querySelector(".save-btn");
  saveBtn.addEventListener("click", savePreview);

  const preview = document.getElementById("preview");
  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get("post_id");

  async function savePreview() {
    isLoading = true;
    updateUI();
    const HTMLContent = preview.innerHTML;

    try {
      const response = await fetch(raffleleader_preview_save_object.ajax_url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          action: "savePreview",
          post_id: postID,
          content: HTMLContent,
          security: raffleleader_preview_save_object.security,
        }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
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
    }

    if (isLoading) {
      saveBtn.innerHTML =
        '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
      if (selectedSection) {
        selectedSection.classList.remove("selected-section");
        console.log(selectedSection.classList);
      }
    } else {
      saveBtn.innerHTML = "Save";
      if (selectedSection) {
        selectedSection.classList.add("selected-section");
      }
    }
  }
});
