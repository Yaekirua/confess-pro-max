// Get references to buttons, popup, and audio
const noButton = document.getElementById("no-btn");
const yesButton = document.getElementById("yes-btn");
const popup = document.getElementById("popup");
const loveSong = document.getElementById("love-song");

// Make the "No" button run away when hovered over
noButton.addEventListener("mouseover", () => {
    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * 80 + "vw"; // Random horizontal position
    noButton.style.top = Math.random() * 80 + "vh"; // Random vertical position
});

// When "Yes" button is clicked
yesButton.addEventListener("click", () => {
    // Show the popup
    popup.style.display = "block";

    // Play the love song
    loveSong.volume = 1.0; // Set volume to 100%
    loveSong.play();

    // Redirect to an appreciation page after 3 seconds
    setTimeout(() => {
        window.location.href = "appreciation.html"; // Replace with the actual URL if needed
    }, 3000);
});

// Close the popup when clicked
popup.addEventListener("click", () => {
    popup.style.display = "none";
});
