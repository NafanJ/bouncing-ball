document.addEventListener("DOMContentLoaded", function() {
    // Get the ball element
    var ball = document.getElementById("ball");

    // Set initial position and speed
    var positionX = 0;
    var positionY = 0;
    var speedX = 5;
    var speedY = 5;
    var acceleration = 1.1; // Factor by which speed increases on collision
    var maxSpeed = 20; // Maximum speed limit

    // Array of colors for the ball
    var colors = [
        "#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6",
        "#3498db", "#e74c3c", "#2ecc71", "#f39c12", "#9b59b6",
        "#1abc9c", "#d35400", "#2980b9", "#c0392b", "#27ae60",
        "#1abc9c", "#d35400", "#2980b9", "#c0392b", "#27ae60",
        "#f1c40f", "#8e44ad", "#16a085", "#e67e22", "#34495e",
        "#f1c40f", "#8e44ad", "#16a085", "#e67e22", "#34495e"
    ];

    // Set up the animation
    function animate() {
        // Update position
        positionX += speedX;
        positionY += speedY;

        // Check for collisions with the window boundaries
        if (positionX + ball.offsetWidth > window.innerWidth || positionX < 0) {
            speedX = -speedX * acceleration; // Reverse and increase speed
            changeColor(); // Change the color on collision
            playCollisionSound();
        }

        if (positionY + ball.offsetHeight > window.innerHeight || positionY < 0) {
            speedY = -speedY * acceleration; // Reverse and increase speed
            changeColor(); // Change the color on collision
            playCollisionSound();
        }

        // Limit the speed to the maximum speed
        speedX = Math.min(speedX, maxSpeed);
        speedY = Math.min(speedY, maxSpeed);

        // Round the position values to whole numbers
        var roundedX = Math.round(positionX);
        var roundedY = Math.round(positionY);

        // Apply the new rounded position
        ball.style.left = roundedX + "px";
        ball.style.top = roundedY + "px";

        // Request the next animation frame
        requestAnimationFrame(animate);
    }

    // Function to change the color of the ball randomly
    function changeColor() {
        var randomColor = colors[Math.floor(Math.random() * colors.length)];
        ball.style.backgroundColor = randomColor;
        console.log(speedX,speedY)
    }

    // Function to play the collision sound
    function playCollisionSound() {
    var collisionSound = document.getElementById("collisionSound");
    collisionSound.currentTime = 0; // Rewind the sound to the beginning (optional)
    collisionSound.play();
}

    // Start the animation
    animate();
});



