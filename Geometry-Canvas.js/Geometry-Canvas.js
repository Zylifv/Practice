const sliderX = document.getElementById("slider-x");
const sliderY = document.getElementById("slider-y");
const sliderZ = document.getElementById("slider-z");
let currValX = document.getElementById("value-input-x");
let currValY = document.getElementById("value-input-y");
let currValZ = document.getElementById("value-input-z");
var canvas = document.createElement("canvas");

function draw() {
  
  canvas.setAttribute("class", "canvas-board")
  canvas.setAttribute("width", 510);
  canvas.setAttribute("height", 510);
  canvas.setAttribute("style", "position: absolute; x:0; y:0;");
  document.body.appendChild(canvas);
}

draw();

var ctx = canvas.getContext("2d");

function drawCube(x, y, z) {
  
  x = sliderX.value;
  y = sliderY.value;
  z = sliderZ.value
  
  currValX.textContent = `Current x size (px): ${x}`;
  currValY.textContent = `Current y size (px): ${y}`;
  currValZ.textContent = `Current z size (px): ${z}`;
    ctx.clearRect(0, 0, 510, 510);
    ctx.lineWidth = 5;
    ctx.strokeRect(x,x,y,z);
    ctx.strokeStyle = '#000'
    ctx.beginPath();
    ctx.moveTo(x,x)
    ctx.stroke();
    ctx.fill();
}
