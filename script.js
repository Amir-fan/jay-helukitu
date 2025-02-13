document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesButton");
    const noButton = document.getElementById("noButton");
    const message = document.getElementById("message");
    const loveLetter = document.getElementById("loveLetter");
    let noClickCount = 0;

    // Initially hide love letter
    loveLetter.style.display = "none";

    // Yes Button Click
    yesButton.addEventListener("click", function () {
        message.textContent = "MEMEME, glad you accepted princess! 💖";
        
        // Hide No Button & Message
        noButton.style.display = "none";
        message.style.display = "none";

        // Show the love letter with fade-in effect
        loveLetter.style.display = "block";
    });

    // No Button Click
    noButton.addEventListener("click", function () {
        if (noClickCount >= 5) {
            noButton.textContent = "STOP FINGORING ME";
            noButton.disabled = true;
            return;
        }

        // Move the No button to a random position
        moveNoButton();
        
        // Update message text
        const messages = [
            "pls pls pls",
            "Wait, hold on a second...",
            "HELP! The button is running away!",
            "Just say yes already hator! *mad jay sounds 😡*",
            "aight bru 😔"
        ];
        message.textContent = messages[noClickCount] || "🥺";
        noClickCount++;
    });

    // Function to move the "No" button randomly
    function moveNoButton() {
        let viewportWidth = window.innerWidth - 100; // Prevents overflow
        let viewportHeight = window.innerHeight - 50;

        let randomX = Math.floor(Math.random() * viewportWidth);
        let randomY = Math.floor(Math.random() * viewportHeight);

        noButton.style.position = "absolute";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    }
});
