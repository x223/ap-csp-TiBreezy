var bgColor =

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  fill(bgColor);
  ellipse(50,60,20,20);
  if (mouseX < 4 * windowWidth / 5) {
    bgColor = '#78E861';
  } else if (mouseX < 3 * windowWidth / 5) {
    bgColor = '#890424';
} else if (mouseX < 2 * windowWidth / 5) {
    bgColor = '#20C8B6';
  } else if (mouseX < windowWidth / 5) {
    bgColor = '#82BCFB';
  } else {
    bgColor = '#E12874';
  }
}