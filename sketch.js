var fixedRect,movingRect;
var square1,square2,square3,square4;

function setup() {
  createCanvas(800,400);

  

  fixedRect = createSprite(600, 350, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug=true;

  movingRect = createSprite(600, 100, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.debug=true;

  square1 = createSprite(100, 100, 50, 50);
  square1.shapeColor = "green";
  square1.debug=true;

  square2 = createSprite(200, 100, 50, 50);
  square2.shapeColor = "green";
  square2.debug=true;

  square3 = createSprite(300, 100, 50, 50);
  square3.shapeColor = "green";
  square3.debug=true;

  square4 = createSprite(400, 100, 50, 50);
  square4.shapeColor = "green";
  square4.debug=true;

  fixedRect.velocityY = -5;
  movingRect.velocityY = 5;



}

function draw() {
  background(255,255,255);  
 
 
  if (objectsTouching(movingRect,square1)){
    movingRect.shapeColor = "blue";
    square1.shapeColor = "blue";
  }
  else{
    movingRect.shapeColor = "green";
    square1.shapeColor = "green";
  }
  if (objectsTouching(movingRect,square2)){
    movingRect.shapeColor = "red";
    square2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    square2.shapeColor = "green";
  }
  objectsBouncing(movingRect,fixedRect);

  drawSprites()
}



