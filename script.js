document.getElementById("yesButton").addEventListener("click", function() {
    const message = document.getElementById("message");
    message.textContent = "MEMEME, glad you accepted princess! 💖";

    // Show the love letter
    document.getElementById("loveLetter").style.display = "block";
});

let noClickCount = 0;
const noButton = document.getElementById("noButton");
const yesButton = document.getElementById("yesButton");
const message = document.getElementById("message");
const question = document.querySelector("h1");

noButton.addEventListener("click", function() {
    if (noClickCount >= 5) {
        noButton.textContent = "STOP FINGORING ME";
        noButton.disabled = true;
        return;
    }

    let questionRect = question.getBoundingClientRect();
    let yesRect = yesButton.getBoundingClientRect();
    let buttonWidth = noButton.offsetWidth;
    let buttonHeight = noButton.offsetHeight;
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    let minX = Math.max(10, questionRect.left - 100);
    let maxX = Math.min(viewportWidth - buttonWidth - 10, questionRect.right + 150);
    let minY = Math.max(10, questionRect.bottom + 20);
    let maxY = Math.min(viewportHeight - buttonHeight - 10, minY + 150);

    let randomX, randomY;
    let isOverlapping;

    do {
        randomX = Math.floor(Math.random() * (maxX - minX)) + minX;
        randomY = Math.floor(Math.random() * (maxY - minY)) + minY;

        // Check if it overlaps with the Yes button
        isOverlapping = (
            randomX < yesRect.right &&
            randomX + buttonWidth > yesRect.left &&
            randomY < yesRect.bottom &&
            randomY + buttonHeight > yesRect.top
        );

    } while (isOverlapping); // Keep generating new positions until it's safe

    noButton.style.position = "absolute";
    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    // Update the message position slightly above the No button
    message.style.position = "absolute";
    message.style.left = (randomX + 20) + "px";
    message.style.top = (randomY - 40) + "px";

    // Change message text dynamically
    let messages = [
        "pls pls pls",
        "Wait, hold on a second...",
        "HELP! The button is running away!",
        "Just say yes already hator! *mad jay sounds 😡*",
        "aight bru 😔"
    ];

    message.textContent = messages[noClickCount] || "🥺";

    noClickCount++;
});
