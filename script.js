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
        const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);
        const rgb = `rgb(${r},${g},${b})`;
        ball.style.backgroundColor = rgb;
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



