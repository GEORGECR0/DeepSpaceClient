window.onload = function () {
    
    const popupBox = document.getElementById('popupBox');
    const openPopupButton = document.getElementById('openPopup');
    const closePopupButton = document.getElementById('closePopup');
    
    // Show the popup box when the open button is clicked
    openPopupButton.addEventListener('click', () => {
        popupBox.style.display = 'flex';
    });
    
    // Hide the popup box when the close button is clicked
    closePopupButton.addEventListener('click', () => {
        popupBox.style.display = 'none';
    });

        const TampermonkeyBox = document.getElementById('tampermonkeyBox');
        const openTampermonkeyButton = document.getElementById('openTampermonkeyBtn');
        const closeTampermonkeyBox = document.getElementById('closeTampermonkey');

        openTampermonkeyButton.addEventListener('click', () => {
            TampermonkeyBox.style.display = 'flex';
        });
        
        // Hide the popup box when the close button is clicked
        closeTampermonkeyBox.addEventListener('click', () => {
            TampermonkeyBox.style.display = 'none';
        });

    const updateDiv = document.getElementById('updateDiv');
    const closeUpdateButton = document.getElementById('closeUpdate');

    updateDiv.style.display = 'flex';

    closeUpdateButton.addEventListener('click', () => {
        updateDiv.style.display = 'none';
    });
    
};
