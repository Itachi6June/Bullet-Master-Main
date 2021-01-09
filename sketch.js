var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  wall = createSprite(1500, 200, thickness, 200);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
}

function draw() {
  background(0); 
  hasCollided(wall, bullet);
  drawSprites();
}
