document.addEventListener("previewLoaded", () => {
  // State variables
  let isLoading = false;
  let selectedSection = null;
  let isSuccess = true;

  const saveBtn = document.querySelector(".save-btn");
  saveBtn.addEventListener("click", savePreview);

  const saveModal = document.getElementById('saveModal');
  const successModal = saveModal.querySelector('.success-modal-content');
  const failModal = saveModal.querySelector('.fail-modal-content');

  const preview = document.getElementById("preview");
  const urlParams = new URLSearchParams(window.location.search);
  const postID = urlParams.get("post_id");

  async function savePreview() {
    isLoading = true;
    updateUI();
    const HTMLContent = preview.outerHTML;

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
      isSuccess = false;
    } finally {
      isLoading = false;
      updateUI();
    }
  }

  function updateUI() {
    const selectedSectionList = document.querySelectorAll(".selected-section");
    if (selectedSectionList.length > 0) {
      selectedSection = document.querySelector(".selected-section");
      resizeHandle = selectedSection.querySelector('.resize-handle');
    }

    if (isLoading) {
      saveBtn.innerHTML =
        '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>';
      if (selectedSection) {
        selectedSection.classList.remove("selected-section");
        resizeHandle.style.display = 'none';
      }
    } else {
      saveBtn.innerHTML = "Save";

      if(isSuccess){
        successModal.style.display = 'block';
      } else {
        failModal.style.display = 'block';
      }

      saveModal.style.animation = 'slideDown 1s forwards';

      setTimeout(()=>{
        saveModal.style.animation = 'slideUp 1.5s forwards';
        setTimeout(()=>{ 
          if(isSuccess) successModal.style.display = 'none';
          if(!isSuccess) failModal.style.display = 'none';
         }, 500);
      }, 5000);

      if (selectedSection) {
        selectedSection.classList.add("selected-section");
        resizeHandle.style.display = 'block';
      }
    }
  }
});
