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
    x: 0,
    y: 0,
    width: 0,
    height: 0
};


function intersectRect(r1, r2) {
    return !(r2.x > r1.width ||
      r2.width < r1.x ||
      r2.y > r1.height ||
      r2.height < r1.y);
  }

function touches(a, b) {
	// has horizontal gap
	if (a.x1 > b.x2 || b.x1 > a.x2) return false;

	// has vertical gap
	if (a.y1 > b.y2 || b.y1 > a.y2) return false;

	return true;
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
        // console.log({x: element.position.x,y: element.position.y, width: 20,height: 20}, {x: snake.x, y: snake.y, width: snake.width, height: snake.height})
        console.log(touches({x1: element.position.x, y1: element.position.y, width: 20,height: 20}, {x: snake.x, y: snake.y, width: snake.width, height: snake.height}))
        // console.log(intersectRect({x: element.position.x,y: element.position.y, width: 20,height: 20}, {x: snake.x, y: snake.y, width: snake.width, height: snake.height}))
    }
    


    setTimeout(() => update(), 20);
}