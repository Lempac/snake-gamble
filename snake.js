var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
var spriteObject = {
  x: 0,
  y: 0,
  width: 64,
  height: 64,
};

var snake = Object.create(spriteObject);
snake.x = 100;
snake.y = 100;

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "./assets/snakehead.png";

var speed = 5;

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
  update();
}

function update() {
  window.requestAnimationFrame(update, canvas);

  if (moveUp) {
    snake.y = -speed;
  }
  if (moveDown) {
    snake.y = +speed;
  }
  if (moveLeft) {
    snake.y = -speed;
  }
  if (moveRight) {
    snake.y = +speed;
  }
  if (snake.x + snake.width > canvas.width) {
    snake.x = canvas.width - snake.width;
  }
  if (snake.y + snake.height > canvas.height) {
    snake.y = canvas.height - snake.height;
  }

  render();
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

  setTimeout(() => update(), 1000);
}