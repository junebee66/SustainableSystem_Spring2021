var canvas;

//site drawing
function setup(){
	canvas = createCanvas(1080,720);
	canvas.position(270,100);
	canvas.style('z-index','-1');

}


function draw(){
	var green1x = 100;
	var green1y = 470;
	var green2y = 420;//dark and long
	var green3y = 390;
	noStroke();


	//greens
	fill("#77AB80");
	ellipse(green1x+50, green1y, 210, 130);
	fill("#77AB80");
	ellipse(green1x+70, green1y, 210, 330);
	fill("#77AB80");
	ellipse(green1x+100, green1y, 210, 130);
	fill("#77AB80");
	ellipse(green1x+150, green1y, 210, 330);
	fill("#77AB80");
	ellipse(green1x+190, green1y, 210, 130);
	fill("#77AB80");
	ellipse(green1x+250, green1y, 210, 330);
	fill("#77AB80");
	ellipse(green1x+350, green1y-50, 210, 230);
	fill("#77AB80");
	ellipse(green1x+450, green1y-50, 210, 230);
	ellipse(green1x+500, green1y-50, 210, 230);
	fill("#77AB80");
	ellipse(green1x+550, green1y, 210, 130);
	fill("#77AB80");
	ellipse(green1x+650, green1y, 210, 330);
	fill("#77AB80");
	ellipse(green1x+750, green1y, 210, 330);
	fill("#77AB80");
	
	fill("#77AB80");
	ellipse(green1x+700, green1y-50, 210, 230);

	fill("#76A25F");
	ellipse(100, green1y, 81, 105);
	ellipse(green1x+50, green1y, 51, 105);
	fill("#76A25F");
	ellipse(green1x+70, green1y, 51, 50);
	fill("#B3CA33");
	ellipse(green1x+90, green1y, 51, 105);
	fill("#B3CA33");
	ellipse(green1x+190, green1y, 51, 90);
	ellipse(green1x+130, green1y, 91, 105);
	fill("#76A25F");
	ellipse(green1x+150, green1y, 51, 150);
	fill("#B3CA33");
	ellipse(green1x+200, green3y, 31, 130);
	fill("#93C75A");
	ellipse(green1x+150, green1y-15, 51, 105);
	fill("#B3CA33");
	ellipse(green1x+300, green3y, 31, 90);
	ellipse(green1x+330, green1y, 41, 105);
	fill("#B3CA33");
	ellipse(green1x+270, green3y-15, 31, 90);
	fill("#93C75A");
	ellipse(green1x+250, green1y, 81, 105);
	fill("#81AC49");
	ellipse(green1x+250, green2y-5, 31, 150);
	fill("#76A25F");
	ellipse(green1x+300, green1y, 91, 150);
	ellipse(green1x+350, green1y, 111, 105);
	fill("#76A25F");
	ellipse(green1x+300, green3y, 31, 90);
	ellipse(green1x+230, green1y-5, 71, 105);
	fill("#81AC49");
	ellipse(green1x+400, green2y, 71, 170);
	fill("#93C75A");
	ellipse(green1x+450, green1y, 41, 90);
	ellipse(green1x+500, green1y, 61, 105);
	fill("#81AC49");
	ellipse(green1x+500, green2y-5, 81, 180);
	fill("#B3CA33");
	ellipse(green1x+540, green3y, 31, 130);
	fill("#93C75A");
	ellipse(green1x+550, green1y, 41, 90);
	ellipse(green1x+630, green1y-5, 61, 90);
	fill("#B3CA33");
	ellipse(green1x+600, green2y, 81, 90);
	fill("#93C75A");
	ellipse(green1x+650, green1y, 81, 105);
	fill("#81AC49");
	ellipse(green1x+190, green1y, 51, 90);
	ellipse(green1x+210, green1y, 51, 90);
	ellipse(green1x+250, green1y, 51, 90);
	fill("#B3CA33");
	ellipse(green1x+790, green1y, 151, 90);
	ellipse(green1x+690, green1y, 51, 90);
	fill("#B3CA33");
	ellipse(green1x+190, green1y, 51, 90);
	ellipse(green1x+690, green1y, 51, 50);
	fill("#81AC49");
	ellipse(green1x+590, green1y, 51, 30);
	ellipse(green1x+190, green1y, 51, 40);

	ellipse(green1x+190, green1y, 51, 90);
	fill("#93C75A");
	ellipse(green1x+730, green1y-15, 31, 90);
	ellipse(green1x+750, green1y, 31, 105);
	fill("#B3CA33");
	ellipse(green1x+300, green3y, 31, 130);
	ellipse(green1x+800, green1y-15, 51, 80);
	
	fill("#81AC49");
	ellipse(green1x+50, green2y, 81, 130);
	fill("#93C75A");
	ellipse(green1x+50, green1y, 81, 105);
	ellipse(green1x+350, green1y, 41, 105);
	ellipse(green1x+750, green1y, 81, 95);
	ellipse(green1x+500, green1y, 51, 105);
	ellipse(green1x+400, green1y, 71, 105);
	ellipse(green1x+50, green1y, 51, 105);
	fill("#B3CA33");
	ellipse(green1x+70, green1y, 51, 50);
	fill("#B3CA33");
	ellipse(green1x+90, green1y, 51, 105);
	fill("#B3CA33");
	ellipse(green1x+690, green1y, 51, 90);
	ellipse(green1x+730, green1y, 91, 105);
	fill("#B3CA33");
	


	ellipse(green1x+50, green1y, 51, 105);
	fill("#76A25F");
	ellipse(green1x+70, green1y, 51, 50);
	fill("#B3CA33");
	ellipse(green1x+90, green1y, 51, 55);
	fill("#B3CA33");
	ellipse(green1x+190, green1y, 51, 90);
	ellipse(green1x+530, green1y, 91, 105);
	fill("#76A25F");
	ellipse(green1x+750, green1y, 51, 150);
	fill("#B3CA33");
	ellipse(green1x+800, green3y, 31, 50);

	fill("#B3CA33");
	ellipse(green1x+400, green2y, 41, 90);
	ellipse(green1x+500, green1y, 31, 99);
	fill("#B3CA33");
	ellipse(green1x+790, green1y, 51, 90);
	ellipse(green1x+690, green1y, 51, 90);
	fill("#B3CA33");
	ellipse(green1x+190, green1y, 51, 90);
	arc

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

	fill("#B3CA33");
	ellipse(green1x+330, green1y, 51, 70);
	ellipse(green1x+390, green1y, 51, 90);
	fill("#81AC49");
	ellipse(green1x+400, green2y, 141, 90);
	fill("#B3CA33");
	ellipse(green1x+200, green3y, 31, 130);
		fill("#B3CA33");
	
	ellipse(green1x+400, green2y, 41, 90);
		fill("#B3CA33");
	
	ellipse(green1x+400, green2y, 41, 90);


	fill("#CBCBCB");
	rect(381,525,242,7,17);
	fill("#818181");
	rect(381,529,240,3,17);


	fill("#C32323");
	rect(411,608,44,19,17);

	

}



