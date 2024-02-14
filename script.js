// Add this to script.js
document.addEventListener("DOMContentLoaded", function () {
    const showLoveButton = document.getElementById("showLove");
    const loveMessageContainer = document.getElementById("loveMessage");

    showLoveButton.addEventListener("click", function () {
        // Toggle display of love messages
        loveMessageContainer.classList.toggle("hidden");

        // Toggle display of each love message
        const loveMessages = loveMessageContainer.getElementsByClassName("hidden");
        Array.from(loveMessages).forEach((message) => {
            message.classList.toggle("hidden");
        });
    });
});
