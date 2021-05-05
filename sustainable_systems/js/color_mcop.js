//this time I redrew the plants on the cement from last week
//(becasue last week, there were just a bunch of different circles instead of actual plants shape)
//and tried to place it together with the previous cat site I drew from last week
const boxX = 700;
const boxY = 80;
const boxH = 45;
const green1x = 150;
const green1y = 865;
var t;

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.style('z-index','-1');
  canvas.position(0,0);
  noCursor();
  t = 0;
}

function draw() {
  background(251,248,229,50);
  noStroke();
  angleMode(DEGREES);
    var r = 360 * noise(t+5);
  var g = 360 * noise(t+10);
  var b = 360 * noise(t+2);

  //bubble
  fill(r, g, b);
  ellipse(mouseX,mouseY,50,50);
  t = t + 0.01;


}