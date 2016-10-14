var fill_color = 'green'
var firstlight = 'white'
var secondlight = 'white'
var thirdlight = 'white'
function setup() {
   createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  text(mouseX + ","+ mouseY,10,10);
  //base pole of the light
  fill('black')
  rect(165,220,20,1000);
  //base of the light
  fill('grey')
  rect(149,94,50,130);
//top light
fill('white');
ellipse(174,120,40,40);

if(mouseX < 1 * windowWidth / 2) {
  firstlight='red';
}
   
}