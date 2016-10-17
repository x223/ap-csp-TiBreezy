var strokeColor = 'green';

function setup() {
  createCanvas(500,500);
}

function draw() {
  if(mouseIsPressed);{
  stroke(strokeColor)
  line(pmouseX,pmouseY,mouseX,mouseY)
  } 
}

function keyTyped() {
  if (key === 'b') {
    strokeColor = '19DEAC';
  } else if (key === 'p') {
    strokeColor = '#28EFF5';
    weight = 10
  }
}