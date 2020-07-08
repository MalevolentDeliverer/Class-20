var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "red"
  movingRect= createSprite(400,100,50,50);
  movingRect.shapeColor = "red";
}

function draw() {
  background("black");  
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  if(fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
      movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
      fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2 &&
      movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.shapeColor = "black"
    movingRect.shapeColor = "black";
    background("red");
  }
else{
  fixedRect.shapeColor = "red"
    movingRect.shapeColor = "red";
    background("black");  
}

  
  drawSprites();
}