console.log("loaded")

const objects = [
    {
        id: 1,
        image: 'apple.png'
    },
    {
        id: 2,
        image: 'nuclear.png'
    },
    {
        id: 3,
        image: 'point_big.png'
    },
    {
        id: 4,
        image: 'point_medium.png'
    },
    {
        id: 5,
        image: 'point_small.png'
    }
]

let elements = [];

let rect = {
    left: 0,
    top: 0,
    right: 0,
    bottom: 0
};

function drawPoint(){
    const element = objects[Math.floor(Math.random() * objects.length)];
    const can = document.getElementById("game-space");
    const ctx = can.getContext("2d");
    const img = new Image();
    const position = {
        x: Math.random() * (can.width - 20),
        y: Math.random() * (can.height - 20)
    }
    img.addEventListener("load", () => {
        ctx.drawImage(img, position.x, position.y, 20, 20);
    });

    img.src = `./assets/${element.image}`;
}


function intersectRect(r1, r2) {
    return !(r2.left > r1.right ||
      r2.right < r1.left ||
      r2.top > r1.bottom ||
      r2.bottom < r1.top);
}

function createSnake() {
    const ctx = document.getElementById("game-space").getContext("2d");
    ctx.fillRect(25, 25, 100, 100);
    
}

