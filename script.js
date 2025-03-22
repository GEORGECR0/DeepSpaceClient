window.onload = function () {
    const popupBox = document.getElementById('popupBox');
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    const tampermonkeyBox = document.getElementById('tampermonkeyBox');
    const closeTampermonkeyBox = document.getElementById('closeTampermonkey');
  
    // Handle popup open/close
    openPopupButton.addEventListener('click', () => {
      popupBox.style.display = 'flex';
    });
    closePopupButton.addEventListener('click', () => {
      popupBox.style.display = 'none';
    });
  
    // Handle multiple Tampermonkey buttons
    document.querySelectorAll('.openTampermonkeyBtn').forEach(button => {
      button.addEventListener('click', () => {
        tampermonkeyBox.style.display = 'flex';
        popupBox.style.display = 'none';
        updateDiv.style.display = 'none';
      });
    });
  
    // Close Tampermonkey Box
    closeTampermonkeyBox.addEventListener('click', () => {
      tampermonkeyBox.style.display = 'none';
    });
  
    // Display update banner
    const updateDiv = document.getElementById('updateDiv');
    const closeUpdateButton = document.getElementById('closeUpdate');
    updateDiv.style.display = 'flex';
    closeUpdateButton.addEventListener('click', () => {
      updateDiv.style.display = 'none';
    });
  };
  
