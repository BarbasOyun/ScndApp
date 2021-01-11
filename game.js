//console.log("Hello")

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let x = 10;
let y = 10;

function gameLoop() {
ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = 'red';
ctx.fillRect(x, 10, 100, 100);

x += 2;
}

setInterval(gameLoop, 1000 / 60)