//console.log("Hello")

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth || 
document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || 
document.body.clientHeight;

const gameObjects = [];

let x = 10;
let y = 10;

let xDir = 5;
let yDir = 5;

Start();

function Start()
{
    console.log("Start")

    for (let index = 0; index < 5; index++) {
        const posX = canvas.width * Math.random();
        const posY = canvas.height * Math.random();

        const radius = 100 + Math.random() * 50;
        const angleStart = 0;
        const angleEnd = Math.PI + Math.PI * Math.random();

        const circleColor = getRndColor();

        gameObjects.push(CreateCircle(posX, posY, radius, angleStart, angleEnd, circleColor))
    }
}


function gameLoop() 
{
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for(const obj of gameObjects)
    {
        DrawCircles(obj.x, obj.y, obj.radius, obj.angleStart, obj.angleEnd, obj.circleColor);

        if (obj.x < canvas.width)
        {
            //gameObjects.push(CreateCircle(obj.x + 10, obj.y, obj.radius, obj.angleStart, obj.angleEnd, obj.circleColor))
        }
    }
    //obj.array.forEach(element => {DrawCircles(obj.x, obj.y, obj.radius, obj.angleStart, obj.angleEnd);});

    ctx.fillStyle = 'red';
    ctx.fillRect(x, y, 100, 100);

    x += xDir;
    y += yDir;

    if (0 >= x || x + 100 >= canvas.width) 
    {
        xDir *= -1;
    }
    
    if (0 >= y || y + 100 >= canvas.height)
    {
        yDir *= -1;
    }

}

canvas.addEventListener('touchstart', (e) => {
    console.log("Touched");

    const radius = 100 + Math.random() * 50;
    const angleStart = 0;
    const angleEnd = Math.PI + Math.PI * Math.random();

    const circleColor = getRndColor();

    gameObjects.push(CreateCircle(e.touches[0].clientX, e.touches[0].clientY, radius, angleStart, angleEnd, circleColor))
})

function DrawCircles(posX, posY, radius, angleStart, angleEnd, circleColor)
{
    //console.log("posX : " + posX)

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.fillStyle = circleColor;//'#003300';
    /*ctx.strokeStyle = `rgb(
        0,
        0,
        0,
        0.5)`;*/

    ctx.arc(posX, posY, radius, angleStart, angleEnd);
    ctx.fill();
    ctx.stroke();
}

function CreateCircle(posX, posY, radius, angleStart, angleEnd, circleColor)
{
    let objectCircle = {
        x : posX,
        y : posY,
        radius : radius,
        angleStart : angleStart,
        angleEnd : angleEnd,
        circleColor : circleColor
    }

    return objectCircle;
}

function getRndColor() {
    var r = 255 * Math.random()|0,
     g = 255 * Math.random()|0,
     b = 255 * Math.random()|0;
   return 'rgb(' + r + ',' + g + ',' + b + ')';
}

setInterval(gameLoop, 1000 / 60)