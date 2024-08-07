document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popupBox').classList.remove('hidden');
});

document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popupBox').classList.add('hidden');
});

document.addEventListener('click', function(event) {
    var popupBox = document.getElementById('popupBox');
    if (!popupBox.classList.contains('hidden') && !popupBox.contains(event.target) && event.target.id !== 'openPopup') {
        popupBox.classList.add('hidden');
    }
});
