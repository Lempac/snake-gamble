var canvas;
var drawingSurface;
var spriteObject = {
    x: 0,
    y: 0,
    width: 48,
    height: 48,
};

var snake = Object.create(spriteObject);
snake.x = 100;
snake.y = 100;

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "./assets/snakehead.png";

var speed = 2;

var moveLeft = false;
var moveRight = false;
var moveUp = false;
var moveDown = false;

window.addEventListener(
    "keydown",
    function (e) {
    switch (e.key) {
        case "ArrowUp":
        moveDown = false;
        moveLeft = false;
        moveRight = false;
        moveUp = true;
        break;
        case "ArrowDown":
        moveDown = true;
        moveLeft = false;
        moveRight = false;
        moveUp = false;
        break;
        case "ArrowLeft":
        moveDown = false;
        moveLeft = true;
        moveRight = false;
        moveUp = false;
        break;
        case "ArrowRight":
        moveDown = false;
        moveLeft = false;
        moveRight = true;
        moveUp = false;
        break;
    }
    },
    false
);

function loadHandler() {
    canvas = document.getElementById("game-space");
    drawingSurface = canvas.getContext("2d");
    update();
    window.requestAnimationFrame(update, canvas);
}

function update() {
    if (moveUp) {
    snake.y -= speed;
    }
    if (moveDown) {
    snake.y += speed;
    }
    if (moveLeft) {
    snake.x -= speed;
    }
    if (moveRight) {
    snake.x += speed;
    }
    if (snake.x + snake.width > canvas.width) {
    snake.x = canvas.width - snake.width;
    }
    if (snake.x + snake.width <= 0) {
    snake.x = snake.width;
    }
    if (snake.y + snake.height > canvas.height) {
    snake.y = canvas.height - snake.height;
    }
    if (snake.y + snake.height < 0) {
    snake.y = snake.height;
    }

    render();
}

let rect = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
};


function intersectRect(r1, r2) {
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
  }

function render() {
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

    drawingSurface.drawImage(
        image,
        Math.floor(snake.x),
        Math.floor(snake.y),
        snake.height,
        snake.width
    );

    for (const element of globalThis.elements) {
        drawingSurface.drawImage(
            element.image,
            element.position.x,
            element.position.y,
            20,
            20
        )
        console.log({left: element.position.x,top: element.position.y,right: 20,bottom: 20}, {left: snake.x, top: snake.y, right: snake.width, bottom: snake.height})
        console.log(intersectRect({left: element.position.x,top: element.position.y,right: 20,bottom: 20}, {left: snake.x, top: snake.y, right: snake.width, bottom: snake.height}))
    }
    


    setTimeout(() => update(), 20);
}