var car;
var Wall;
var weight;
var speed;
function setup() {
  createCanvas(800,400);
car = createSprite(10, 200, 50, 50);
car.shapeColor = "white";

Wall = createSprite(790,200,40,600);
Wall.shapeColor = "brown";
speed = random(90,200);
car.velocityX = speed;
}

function draw() {
  background("black");
 
  if ( Wall.x - car.x<(car.width+Wall.width/2))  {
  car.velocityX = 0;
  var def = 0.5*weight*speed*speed/22509;
  if (def>180){
car.shapeColor = color(255,0,0)
  }
  if (def=100){
    car.shapeColor = color(230,230,0)
      }
      if (def<180){
        car.shapeColor = color(0,255,0)
          }
          
    else {
      car.shapeColor = "white"
    }
 
 }
  drawSprites();
}