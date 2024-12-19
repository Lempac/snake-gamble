var canvas;
var drawingSurface;
var spriteObject = {
    x: 0,
    y: 0,
    width: 48,
    height: 48,
};

var snake1 = Object.create(spriteObject);
snake1.x = 100;
snake1.y = 100;

var snake2 = Object.create(spriteObject);
snake1.x = 300;
snake1.y = 300;

var image = new Image();
image.addEventListener("load", loadHandler, false);
image.src = "./assets/snakehead.png";

var speed = 2;

var moveLeft1 = false;
var moveRight1 = false;
var moveUp1 = false;
var moveDown1 = false;

var moveLeft2 = false;
var moveRight2 = false;
var moveUp2 = false;
var moveDown2 = false;

window.addEventListener(
    "keydown",
    function (e) {
    switch (e.key) {
        case "ArrowUp":
        moveDown1 = false;
        moveLeft1 = false;
        moveRight1 = false;
        moveUp1 = true;
        break;
        case "ArrowDown":
        moveDown1 = true;
        moveLeft1 = false;
        moveRight1 = false;
        moveUp1 = false;
        break;
        case "ArrowLeft":
        moveDown1 = false;
        moveLeft1 = true;
        moveRight1 = false;
        moveUp1 = false;
        break;
        case "ArrowRight":
        moveDown1 = false;
        moveLeft1 = false;
        moveRight1 = true;
        moveUp1 = false;
        break;
    }
    },
    false
);

window.addEventListener(
    "keydown",
    function (e) {
    switch (e.key) {
        case "W":
        moveDown1 = false;
        moveLeft1 = false;
        moveRight1 = false;
        moveUp1 = true;
        break;
        case "S":
        moveDown1 = true;
        moveLeft1 = false;
        moveRight1 = false;
        moveUp1 = false;
        break;
        case "A":
        moveDown1 = false;
        moveLeft1 = true;
        moveRight1 = false;
        moveUp1 = false;
        break;
        case "D":
        moveDown1 = false;
        moveLeft1 = false;
        moveRight1 = true;
        moveUp1 = false;
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
    if (moveUp1) {
    snake1.y -= speed;
    }
    if (moveDown1) {
    snake1.y += speed;
    }
    if (moveLeft1) {
    snake1.x -= speed;
    }
    if (moveRight1) {
    snake1.x += speed;
    }
    if (snake1.x > canvas.width) {
    snake1.x = 0 - snake1.width + 1;
    }
    if (snake1.x  < 0 - snake1.width) {
    snake1.x = canvas.width - 1;
    }
    if (snake1.y > snake1.height + canvas.height) {
    snake1.y = 0 - snake1.height + 1;
    }
    if (snake1.y < 0 - snake1.height) {
    snake1.y = canvas.height -1;
    }

    render();
}


function intersectRect(r1, r2) {
return !(r2.x > r1.width + r1.x ||
    r2.width+r2.x < r1.x ||
    r2.y > r1.height+r1.y  ||
    r2.height+r2.y < r1.y);
}

function idToPower(id) {
    switch (id) {
        case 1:
            globalThis.player1 += 4;
            document.getElementById('player1').textContent = globalThis.player1;
            break;
        case 5:
            globalThis.player1 += 1;
            document.getElementById('player1').textContent = globalThis.player1;
            break;
        case 4:
            globalThis.player1 += 3;
            document.getElementById('player1').textContent = globalThis.player1;
            break;
        case 3:
            globalThis.player1 += 2;
            document.getElementById('player1').textContent = globalThis.player1;
            break;
        case 2:
            speed = 10;
            setTimeout(() => {
                speed = 5;
            }, 3000);
            break;

        default:
            break;
    }
}

function end() {
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);
    document.getElementById('game-status').classList.remove('hidden');
    globalThis.isEnded = true;
  }

function render() {
    drawingSurface.clearRect(0, 0, canvas.width, canvas.height);

    drawingSurface.drawImage(
        image,
        Math.floor(snake1.x),
        Math.floor(snake1.y),
        snake1.height,
        snake1.width
    );

    for (const element of globalThis.elements) {
        drawingSurface.drawImage(
            element.image,
            element.position.x,
            element.position.y,
            20,
            20
        )
        if(intersectRect({x: element.position.x,y: element.position.y, width: 20,height: 20}, {x: snake1.x, y: snake1.y, width: snake1.width, height: snake1.height})){
            idToPower(element.id)
            var index = globalThis.elements.indexOf(element);
            if (index !== -1) {
                globalThis.elements.splice(index, 1);
            }
        }
    }
    


    setTimeout(() => update(), 20);
}