//console.log("Hello")

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = document.documentElement.clientWidth || 
document.body.clientWidth;
canvas.height = document.documentElement.clientHeight || 
document.body.clientHeight;

let x = 10;
let y = 10;

let xDir = 5;
let yDir = 5;

function gameLoop() {
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

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

setInterval(gameLoop, 1000 / 60)