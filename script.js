document.addEventListener("DOMContentLoaded", function () {
    var ball = document.getElementById("ball");
    var trailContainer = document.createElement("div");
    trailContainer.id = "trail-container";
    document.body.appendChild(trailContainer);

    var positionX = 0;
    var positionY = 0;
    var speedX = 5;
    var speedY = 5;
    var acceleration = 1.1;
    var maxSpeed = 20;
    var red = 0
    var green = 0
    var blue = 0;

    function animate() {
        positionX += speedX;
        positionY += speedY;
        changeColor()
        // Check for collisions with the window boundaries
        if (positionX + ball.offsetWidth > window.innerWidth) {
            positionX = window.innerWidth - ball.offsetWidth;
            speedX = -speedX * acceleration;
            playCollisionSound();
        } else if (positionX < 0) {
            positionX = 0;
            speedX = -speedX * acceleration;
            playCollisionSound();
        }

        if (positionY + ball.offsetHeight > window.innerHeight) {
            positionY = window.innerHeight - ball.offsetHeight;
            speedY = -speedY * acceleration;
            playCollisionSound();
        } else if (positionY < 0) {
            positionY = 0;
            speedY = -speedY * acceleration;
            playCollisionSound();
        }

        speedX = Math.min(speedX, maxSpeed);
        speedY = Math.min(speedY, maxSpeed);

        var roundedX = Math.round(positionX);
        var roundedY = Math.round(positionY);

        ball.style.left = roundedX + "px";
        ball.style.top = roundedY + "px";

        createTrail(roundedX + ball.offsetWidth / 2, roundedY + ball.offsetHeight / 2);

        requestAnimationFrame(animate);
    }

    function createTrail(x, y) {
        var trail = document.createElement("div");
        trail.className = "trail";
        trail.style.left = x + "px";
        trail.style.top = y + "px";
        trail.style.backgroundColor = ball.style.backgroundColor
        trailContainer.appendChild(trail);
    }

    function changeColor() {
        /*const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
        const r = randomBetween(0, 255);
        const g = randomBetween(0, 255);
        const b = randomBetween(0, 255);*/
        red  += 1;
        green  += 1;
        blue += 1;
        const rgb = `rgb(${red},${green},${blue})`;
        ball.style.backgroundColor = rgb;
    }

    function playCollisionSound() {
        var collisionSound = document.getElementById("collisionSound");
        collisionSound.currentTime = 0;
        collisionSound.play();
    }

    animate();
});