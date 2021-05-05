
const boxX = 700;
const boxY = 80;
const boxH = 45;
const green1x = 150;
const green1y = 865;
var t;


// function preload(){
// 	cat = loadImage('../assets/cat.png');
// }

function setup(){
  canvas = createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-3');
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

////////////////////////////////////////
//redrawing the plants on the cement pots
fill(r, g, b);
ellipse(mouseX,mouseY,50,50);
t = t + 0.01;

push();
translate(-80,-70);
scale(1.7,1.4);

//grey cement on both sides
  fill("#A2A2A2");
  rect(90,508,291,134,30);

  fill("#A2A2A2");
  rect(622,508,291,134,30);
    //grey cement on both sides
  fill("#A2A2A2");
  rect(90,508,291,134,30);

  fill("#A2A2A2");
  rect(622,508,291,134,30);



  //shelter bottom
  fill("#d1cfb9");
  beginShape();
  vertex(378,641);
  vertex(421,609);
  vertex(581,609);
  vertex(622,638);
  endShape(CLOSE);

  //shelter side wall
  fill("#666666");
  beginShape();
  vertex(378,507);
  vertex(417,483);
  vertex(421,609);
  vertex(378,641);
  endShape(CLOSE);

  fill("#666666");
  beginShape();
  vertex(581,486);
  vertex(623,504);
  vertex(622,638);
  vertex(581,609);
  endShape(CLOSE);

  //cement shadows(triangles)
  fill("#909090");
  triangle(233,642,378,530,378,641);

  fill("#909090");
  triangle(649,639,913,639,913,528);


  fill("#CBCBCB");
  rect(381,525,242,7,17);
  fill("#818181");
  rect(381,529,240,3,17);


  fill("#C32323");
  rect(411,608,44,19,17);


///greens
//green1
push();
    noStroke();
    fill('#A8C687');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x-90,green1y-600);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
pop();

push();
    noStroke();
    fill('#89B25D');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+30,green1y-600);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

push();
    noStroke();
    fill('#83C939');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+180,green1y-600);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

push();
    noStroke();
    fill('#DAFFB3');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x-50,green1y-610);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();
    push();
    noStroke();
    fill('#74AE43');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();


//green2
    push();
    noStroke();
    fill('#65AD7C');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+120,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
pop();
  
push();
    noStroke();
    fill('#B6CC9E');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+300,green1y-610);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

push();
    noStroke();
    fill('#839E66');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+470,green1y-590);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
pop();

push();
    noStroke();
    fill('#B6CC9E');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+70,green1y-600);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();



push();
    noStroke();
    fill('#CBDDB8');
    scale(1.2);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+370,green1y-600);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+300,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+450,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

    push();
    noStroke();
    fill('#74AE43');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+510,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

    push();
    noStroke();
    fill('#74AE43');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+600,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

    push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+750,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+950,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  push();
    noStroke();
    fill('#74AE43');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+1150,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  //green2
  push();
    noStroke();
    fill('#65AD7C');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+1500,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+1300,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(23,83);
    point(37,66);
    point(49,65);
    point(65,79);
    //sec mount
    point(86,33);
    point(128,32);
    point(65,79);
    //right line down
    point(146,80);
    point(146,120);
    //right bottom corner
    point(144,139);
    point(139,152);
    //hori line
    point(130,154);
    point(51,154);
    //left corner
    point(51,154);
    point(39,154);
    //left line down
    point(32,147);
    point(21,101);
translate(green1x+1000,green1y);
    beginShape();
    curveVertex(23,83);
    curveVertex(23,83);
    curveVertex(37,66);
    curveVertex(49,65);
    //sec mount
    curveVertex(65,79);
    curveVertex(86,33);
    curveVertex(128,32);
    curveVertex(146,80);
    //right line down
    vertex(146,80);
    vertex(146,120);
    //right bottom corner
    curveVertex(144,139);
    curveVertex(139,152);
    curveVertex(130,154);
    //hori line
    vertex(130,154);
    vertex(51,154);
    //left corner
    curveVertex(51,154);
    curveVertex(39,154);
    curveVertex(32,147);
    //left line down
    vertex(32,147);
    vertex(21,101);
    vertex(21,101);
    endShape();
  pop();

  push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+15,green1y);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

  push();
    noStroke();
    fill('#ABCC37');
    scale(.5);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+15,green1y);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

  push();
    noStroke();
    fill('#74AE43');
    scale(.7);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+260,green1y-280);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

  push();
    noStroke();
    fill('#74AE43');
    scale(.7);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+140,green1y-280);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

push();
    noStroke();
    fill('#74AE43');
    scale(.7);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+580,green1y-280);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

  push();
    noStroke();
    fill('#74AE43');
    scale(.7);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+730,green1y-280);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

push();
    noStroke();
    fill('#ABCC37');
    scale(.7);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+480,green1y-280);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

  push();
    noStroke();
    fill('#65AD7C');
    scale(.7);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+870,green1y-280);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

push();
    noStroke();
    fill('#74AE43');
    scale(.7);
    //first mount
    point(8,94);
    point(10,83);
    point(15,81); 
    point(26,89);
    point(28,44);
    point(33,28);
    point(44,11);
    point(59,13);
    point(66,33);
    //third mount
    point(65,47);
    point(74,39);
    point(80,42);
    point(79,53);
    point(73,70);
    point(68,82);
    point(72,83);
    point(74,90);
    point(63,103);
    point(73,105);
    point(80,117);
    point(77,132);
    point(66,144);
    point(53,149);
    point(30,148);
    point(20,142);
    point(9.5,125);
    point(7,106);
    point(8,94);
translate(green1x+970,green1y-280);
    beginShape();
        //first mount
    curveVertex(8,94);
    curveVertex(10,83);
    curveVertex(15,81); 
    curveVertex(26,89);
    curveVertex(28,44);
    curveVertex(33,28);
    curveVertex(44,11);
    curveVertex(59,13);
    curveVertex(66,33);
    //third mount
    curveVertex(65,47);
    curveVertex(74,39);
    curveVertex(80,42);
    curveVertex(79,53);
    curveVertex(73,70);
    curveVertex(68,82);
    curveVertex(72,83);
    curveVertex(74,90);
    curveVertex(63,103);
    curveVertex(73,105);
    curveVertex(80,117);
    curveVertex(77,132);
    curveVertex(66,144);
    curveVertex(53,149);
    curveVertex(30,148);
    curveVertex(20,142);
    curveVertex(9.5,125);
    curveVertex(7,106);
    curveVertex(8,94);
    endShape();
  pop();

pop();







///////////ICON BUTTONS///////////////
//////1. Sun Button
	//button
	push();
		translate(1150,30);
		scale(1.5);
		noStroke();

		fill('black');
		ellipse(50,50,50,50);

		fill('black');
		triangle(25,50,75,50,50,105);

		fill('white')
		ellipse(50,50,40,40);
		
	//sun inisde icon
		  push();
		  translate(38,38);
		  fill(245, 187, 87);
		  stroke('#000000');
		  strokeWeight(4);
		  scale(0.5);
		  line(9, 4, 15, 11);
		  line(24, 0, 24, 9);
		  line(38, 4, 33, 11);
		  line(48, 16, 38, 19);
		  line(48, 32, 39, 29);
		  line(33, 37, 39, 44);
		  line(24, 40, 24, 49);
		  line(15, 37, 9, 44);
		  line(9, 29, 0,32);
		  line(9, 19, 0, 16);
		  pop();
	pop();



///2. Lives Button
	//button
	push();
		translate(300,450);//whole icon position
		scale(1.5);
		noStroke();

		fill('black');
		ellipse(50,50,50,50);

		fill('black');
		triangle(25,50,75,50,50,105);

		fill('white')
		ellipse(50,50,40,40);
	//plants icon inside
		push();
		  translate(49, 50);
		  scale(.5);
		  fill('black');
		  noStroke();
		  // arc(7, 22, 15, 20, 80,220);
		  // arc(7, 22, 16, 19, 221,79);

		    //left leaf
		    push();
		    translate(-50,-30);
		      rotate(330);
		      ellipse(22,44,14,16);
		      beginShape();
		        vertex(15, 42);
		        vertex(22, 23);
		        vertex(28,42);
		      endShape(CLOSE);
		    pop();

		    //right leaf
		    push();
		    translate(18,-45);
		      rotate(30);
		      ellipse(22,44,14,16);
		      beginShape();
		        vertex(15, 42);
		        vertex(22, 23);
		        vertex(28,42);
		      endShape(CLOSE);
		    pop();

		    //left branch
		    push();
		    translate(-30,-10);
		    rotate(330);
		    beginShape();
		        vertex(11, 38);
		        vertex(14, 15);
		        vertex(18, 38);
		      endShape(CLOSE);
		    pop();

		    //right branch
		    push();
		    translate(3,-20);
		    rotate(30);
		    beginShape();
		        vertex(13, 43);
		        vertex(20, 18);
		        vertex(20, 43);
		      endShape(CLOSE);
		    pop();
		  pop();
		pop();
	pop();

//3. Color
    //button 
    push();
        translate(1180,550);//whole icon position
        scale(1.5);
        noStroke();

        fill('black');
        ellipse(50,50,50,50);

        fill('black');
        triangle(25,50,75,50,50,105);

        fill('white')
        ellipse(50,50,40,40);
    //cloud inside button
    push();
      translate(35,35);
      scale(0.5);
      fill('black');
      noStroke();
      ellipse(11,33,23,23);
      ellipse(30,27,34,32);
      ellipse(49,34,23,22);  
      rect(11,37,39,8);
    pop();
    pop();

//4. Hydro
    //button
    push();
        translate(580,600);//whole icon position
        scale(1.5);
        noStroke();

        fill('black');
        ellipse(50,50,50,50);

        fill('black');
        triangle(25,50,75,50,50,105);

        fill('white')
        ellipse(50,50,40,40);
    //water inside button
    push();
      translate(42,36);
      scale(.5);
      fill('black');
      noStroke();
      
        //big grey
        ellipse(16,41,33,33);
        
        beginShape();
          vertex(0, 38);
          vertex(16, 0);
          vertex(32,38);
        endShape(CLOSE);

        //white small
        fill('white')
        ellipse(22,44,12,16);
        
        beginShape();
          vertex(15, 42);
          vertex(22, 23);
          vertex(28,42);
        endShape(CLOSE);
      pop();
}

//Old Circle Bushes
// var canvas;

// //site drawing
// function setup(){
// 	canvas = createCanvas(1080,720);
// 	canvas.position(270,100);
// 	canvas.style('z-index','-1');

// }


// function draw(){
// 	var green1x = 100;
// 	var green1y = 470;
// 	var green2y = 420;//dark and long
// 	var green3y = 390;
// 	noStroke();


// 	//greens
// 	fill("#77AB80");
// 	ellipse(green1x+50, green1y, 210, 130);
// 	fill("#77AB80");
// 	ellipse(green1x+70, green1y, 210, 330);
// 	fill("#77AB80");
// 	ellipse(green1x+100, green1y, 210, 130);
// 	fill("#77AB80");
// 	ellipse(green1x+150, green1y, 210, 330);
// 	fill("#77AB80");
// 	ellipse(green1x+190, green1y, 210, 130);
// 	fill("#77AB80");
// 	ellipse(green1x+250, green1y, 210, 330);
// 	fill("#77AB80");
// 	ellipse(green1x+350, green1y-50, 210, 230);
// 	fill("#77AB80");
// 	ellipse(green1x+450, green1y-50, 210, 230);
// 	ellipse(green1x+500, green1y-50, 210, 230);
// 	fill("#77AB80");
// 	ellipse(green1x+550, green1y, 210, 130);
// 	fill("#77AB80");
// 	ellipse(green1x+650, green1y, 210, 330);
// 	fill("#77AB80");
// 	ellipse(green1x+750, green1y, 210, 330);
// 	fill("#77AB80");
	
// 	fill("#77AB80");
// 	ellipse(green1x+700, green1y-50, 210, 230);

// 	fill("#76A25F");
// 	ellipse(100, green1y, 81, 105);
// 	ellipse(green1x+50, green1y, 51, 105);
// 	fill("#76A25F");
// 	ellipse(green1x+70, green1y, 51, 50);
// 	fill("#B3CA33");
// 	ellipse(green1x+90, green1y, 51, 105);
// 	fill("#B3CA33");
// 	ellipse(green1x+190, green1y, 51, 90);
// 	ellipse(green1x+130, green1y, 91, 105);
// 	fill("#76A25F");
// 	ellipse(green1x+150, green1y, 51, 150);
// 	fill("#B3CA33");
// 	ellipse(green1x+200, green3y, 31, 130);
// 	fill("#93C75A");
// 	ellipse(green1x+150, green1y-15, 51, 105);
// 	fill("#B3CA33");
// 	ellipse(green1x+300, green3y, 31, 90);
// 	ellipse(green1x+330, green1y, 41, 105);
// 	fill("#B3CA33");
// 	ellipse(green1x+270, green3y-15, 31, 90);
// 	fill("#93C75A");
// 	ellipse(green1x+250, green1y, 81, 105);
// 	fill("#81AC49");
// 	ellipse(green1x+250, green2y-5, 31, 150);
// 	fill("#76A25F");
// 	ellipse(green1x+300, green1y, 91, 150);
// 	ellipse(green1x+350, green1y, 111, 105);
// 	fill("#76A25F");
// 	ellipse(green1x+300, green3y, 31, 90);
// 	ellipse(green1x+230, green1y-5, 71, 105);
// 	fill("#81AC49");
// 	ellipse(green1x+400, green2y, 71, 170);
// 	fill("#93C75A");
// 	ellipse(green1x+450, green1y, 41, 90);
// 	ellipse(green1x+500, green1y, 61, 105);
// 	fill("#81AC49");
// 	ellipse(green1x+500, green2y-5, 81, 180);
// 	fill("#B3CA33");
// 	ellipse(green1x+540, green3y, 31, 130);
// 	fill("#93C75A");
// 	ellipse(green1x+550, green1y, 41, 90);
// 	ellipse(green1x+630, green1y-5, 61, 90);
// 	fill("#B3CA33");
// 	ellipse(green1x+600, green2y, 81, 90);
// 	fill("#93C75A");
// 	ellipse(green1x+650, green1y, 81, 105);
// 	fill("#81AC49");
// 	ellipse(green1x+190, green1y, 51, 90);
// 	ellipse(green1x+210, green1y, 51, 90);
// 	ellipse(green1x+250, green1y, 51, 90);
// 	fill("#B3CA33");
// 	ellipse(green1x+790, green1y, 151, 90);
// 	ellipse(green1x+690, green1y, 51, 90);
// 	fill("#B3CA33");
// 	ellipse(green1x+190, green1y, 51, 90);
// 	ellipse(green1x+690, green1y, 51, 50);
// 	fill("#81AC49");
// 	ellipse(green1x+590, green1y, 51, 30);
// 	ellipse(green1x+190, green1y, 51, 40);

// 	ellipse(green1x+190, green1y, 51, 90);
// 	fill("#93C75A");
// 	ellipse(green1x+730, green1y-15, 31, 90);
// 	ellipse(green1x+750, green1y, 31, 105);
// 	fill("#B3CA33");
// 	ellipse(green1x+300, green3y, 31, 130);
// 	ellipse(green1x+800, green1y-15, 51, 80);
	
// 	fill("#81AC49");
// 	ellipse(green1x+50, green2y, 81, 130);
// 	fill("#93C75A");
// 	ellipse(green1x+50, green1y, 81, 105);
// 	ellipse(green1x+350, green1y, 41, 105);
// 	ellipse(green1x+750, green1y, 81, 95);
// 	ellipse(green1x+500, green1y, 51, 105);
// 	ellipse(green1x+400, green1y, 71, 105);
// 	ellipse(green1x+50, green1y, 51, 105);
// 	fill("#B3CA33");
// 	ellipse(green1x+70, green1y, 51, 50);
// 	fill("#B3CA33");
// 	ellipse(green1x+90, green1y, 51, 105);
// 	fill("#B3CA33");
// 	ellipse(green1x+690, green1y, 51, 90);
// 	ellipse(green1x+730, green1y, 91, 105);
// 	fill("#B3CA33");
	


// 	ellipse(green1x+50, green1y, 51, 105);
// 	fill("#76A25F");
// 	ellipse(green1x+70, green1y, 51, 50);
// 	fill("#B3CA33");
// 	ellipse(green1x+90, green1y, 51, 55);
// 	fill("#B3CA33");
// 	ellipse(green1x+190, green1y, 51, 90);
// 	ellipse(green1x+530, green1y, 91, 105);
// 	fill("#76A25F");
// 	ellipse(green1x+750, green1y, 51, 150);
// 	fill("#B3CA33");
// 	ellipse(green1x+800, green3y, 31, 50);

// 	fill("#B3CA33");
// 	ellipse(green1x+400, green2y, 41, 90);
// 	ellipse(green1x+500, green1y, 31, 99);
// 	fill("#B3CA33");
// 	ellipse(green1x+790, green1y, 51, 90);
// 	ellipse(green1x+690, green1y, 51, 90);
// 	fill("#B3CA33");
// 	ellipse(green1x+190, green1y, 51, 90);
// 	arc

// 	//grey cement on both sides
// 	fill("#A2A2A2");
// 	rect(90,508,291,134,30);

// 	fill("#A2A2A2");
// 	rect(622,508,291,134,30);
// 		//grey cement on both sides
// 	fill("#A2A2A2");
// 	rect(90,508,291,134,30);

// 	fill("#A2A2A2");
// 	rect(622,508,291,134,30);


// 	//shelter bottom
// 	fill("#d1cfb9");
// 	beginShape();
// 	vertex(378,641);
// 	vertex(421,609);
// 	vertex(581,609);
// 	vertex(622,638);
// 	endShape(CLOSE);

// 	//shelter side wall
// 	fill("#666666");
// 	beginShape();
// 	vertex(378,507);
// 	vertex(417,483);
// 	vertex(421,609);
// 	vertex(378,641);
// 	endShape(CLOSE);

// 	fill("#666666");
// 	beginShape();
// 	vertex(581,486);
// 	vertex(623,504);
// 	vertex(622,638);
// 	vertex(581,609);
// 	endShape(CLOSE);

// 	//cement shadows(triangles)
// 	fill("#909090");
// 	triangle(233,642,378,530,378,641);

// 	fill("#909090");
// 	triangle(649,639,913,639,913,528);

// 	fill("#B3CA33");
// 	ellipse(green1x+330, green1y, 51, 70);
// 	ellipse(green1x+390, green1y, 51, 90);
// 	fill("#81AC49");
// 	ellipse(green1x+400, green2y, 141, 90);
// 	fill("#B3CA33");
// 	ellipse(green1x+200, green3y, 31, 130);
// 		fill("#B3CA33");
	
// 	ellipse(green1x+400, green2y, 41, 90);
// 		fill("#B3CA33");
	
// 	ellipse(green1x+400, green2y, 41, 90);


// 	fill("#CBCBCB");
// 	rect(381,525,242,7,17);
// 	fill("#818181");
// 	rect(381,529,240,3,17);


// 	fill("#C32323");
// 	rect(411,608,44,19,17);

	

// }

//this time I redrew the plants on the cement from last week
//(becasue last week, there were just a bunch of different circles instead of actual plants shape)
//and tried to place it together with the previous cat site I drew from last week

