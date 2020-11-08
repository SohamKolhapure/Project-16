
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
}



function setup() {
  createCanvas(590,400)
 
  monkey = createSprite(55,322,20,20);
  monkey.addAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  monkey.scale = 0.2;
  
  
  foodGroup = new Group();
  obstacleGroup = new Group();
  
  
  ground = createSprite(350,400,700,10);
  ground.shapeColor = rgb(145,82,45);
  

}


function draw() {
  background('pink');
  if (ground.x < 0){
      ground.x = ground.width/2;
    } 
  if(keyDown("space")&& monkey.y > 100) {
        monkey.velocityY = -13;
    
  }
  
   monkey.velocityY =  monkey.velocityY + 0.5;
  if(monkey.Y < 10){
     monkey.VelocityY = -11;
  }
  
   monkey.collide(ground)
  
  textSize(20);
  fill("yellow");
  survivalTime = Math.round(frameCount/frameRate())
  text("Survival Time: " + survivalTime,100,50)
  
  drawSprites();
  food();
  obstacles();
  
}
function food(){
  
    banana = createSprite(-29,200,20,20);
    banana.addImage("banana", bananaImage);
  banana.scale = 0.1
  banana.lifetime = 300;
  if(frameCount %150 ===0){
    banana.y = Math.round(random(120,200));
    banana.x = Math.round(random(600,300));
  banana.velocityX = -2;  
  }
  
  foodGroup.add(banana);
}
function obstacles(){
   if(frameCount%200 ===0){
  obstacle = createSprite(400,360,20,20);
  obstacle.addImage("obstacle", obstacleImage);
  obstacle.scale = 0.2;
  obstacle.velocityX = -5;
  obstacle.lifetime = 100;
     obstacleGroup.add(obstacle);
}

}




