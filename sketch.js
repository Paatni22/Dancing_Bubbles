var bubbles = [];
var x, y, r;

// DRAGG MOUSE to make bubbles
function mouseDragged() {
  var b = new Bubble(mouseX, mouseY, random(10, 40));
  bubbles.push(b);
}
// PRESS MOUSE for coloring the bubbles
function mousePressed(){
	for(var b of bubbles){
    b.clicked(mouseX,mouseY);
  }
}

function setup() {
  createCanvas(900, 600);

}

function draw() {
  background(0);
  for( let b of bubbles)    //bubbles is an array
  {
    b.move();
    b.show();
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color=0;
  }
  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  show() {
    strokeWeight(2);
    fill(this.color);
    stroke(255);
    ellipse(this.x, this.y, this.r);
  }
  clicked(px,py){
    var d= dist(px,py,this.x,this.y);
    if(d<this.r)
      this.color=255;
  }
}
