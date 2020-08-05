var bullet, wall, thickness;
var speed, weight;
var damage;

function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,70,35);
  bullet.velocityX = speed;
  
  thickness = random(22,83);

  wall = createSprite(1200,200,thickness,height/2);

  
 
  
}

function draw() {
  background("black"); 
  
  if(bullet.collide(wall)) {
    damage = 0.5*weight*speed*speed/thickness*thickness*thickness;
    
       if(damage <= 10){
         bullet.shapeColor = "green";
       }
       if(damage > 10 ){
        bullet.shapeColor = "red";
      }
    

  }
  
  
  

  drawSprites();

  
} 