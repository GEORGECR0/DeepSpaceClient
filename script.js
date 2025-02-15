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



    const updateDiv = document.getElementById('updateDiv');
    const closeUpdateButton = document.getElementById('closeUpdate');

    updateDiv.style.display = 'flex';

    
    // Hide the popup box when the close button is clicked
    closeUpdateButton.addEventListener('click', () => {
        updateDiv.style.display = 'none';
    });
    
};
