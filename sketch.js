var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);

  speed=random(55,180);
  weight=random(400,200);


car = createSprite(50,200,50,50);
car.velocityX = speed;
car.shapeColor = color(255);


  wall=createSprite(1200, 200, 50, 250);
  wall.shapeColor=("white");
}

function draw() {
  background(0,0,0);  

  if(wall.x-car.x<(car.width+wall.width/2))
  {
car.velocityX =0;
var defomation=0.5*weight*speed*speed/22509;
if(defomation>180)
{
  car.shapeColor =color (255,0,0)
}
if(defomation<180 && defomation>100)
{
  car.shapeColor = color(230,230,0);
}
if (defomation<100)
{
  car.shapeColor=color(0,255,0);
}

  }
  drawSprites();
}