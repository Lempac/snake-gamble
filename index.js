console.log("loaded")

globalThis.player1 = 0;
globalThis.player2 = 0;

globalThis.objects = [
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

globalThis.elements = [];



function drawPoint(){
    const objectsList = globalThis.objects[Math.floor(Math.random() * globalThis.objects.length)];
    const can = document.getElementById("game-space");
    const ctx = can.getContext("2d");
    const img = new Image();
    const position = {
        x: Math.floor(Math.random() * (can.width - 20)),
        y: Math.floor(Math.random() * (can.height - 20))
    }
    img.src = `./assets/${objectsList.image}`;
    const element = {
        id: objectsList.id,
        image: img,
        position: position
    }
    globalThis.elements.push(element);
    // img.addEventListener("load", () => {
    //     ctx.drawImage(img, position.x, position.y, 20, 20);
    // });

    
}




