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


// Function to display the div once per session
window.onload = function () {
    console.log("Page loaded");

    // Check if "updateShown" exists in sessionStorage
    if (!sessionStorage.getItem("updateShown")) {
        // Show the update div
        document.getElementById("updateDiv").style.display = "flex"; // Ensure it's using flexbox

        // Mark the update as shown for this session
        sessionStorage.setItem("updateShown", "true");
    }
};

// Function to close the div
function closeDiv() {
    // Hide the update div when closed
    document.getElementById("updateDiv").style.display = "none";
}
