
  var score;
  var redScore;
  var blueScore;
  var greenScore;
  var BalloonsGroup;

var balloon,balloons;
var arrow, bow;
function preload(){
  blue_balloons=loadImage("blue_balloon0.png");
   green_balloons=loadImage("green_balloon0.png");
   red_balloons=loadImage("red_balloon0.png");
   pink_balloons=loadImage("pink_balloon0.png");
  bowX =loadImage("bow0.png");
  groundImage = loadImage("background0.png");
  arrowX =loadImage("arrow0.png");
}

function setup(){
  background(180);
  createCanvas(600,400);
  
  
  
  score = 0;
  redScore = 0;
  blueScore = 0;
  greenScore = 0;
  
  //score = score + Math.round(getFrameRate()/60);
  
  balloon=createSprite(50,160,20,50);
  
  pink_balloons.scale = 1;
  
 

   
  background = createSprite(0, 0, 600, 600);
  background.addImage(groundImage);
  background.scale = 2.5;
 //  background.x = background.width /2;
  
  
  bow = createSprite(550, 100, 10, 50);
 bow.addImage(bowX);  
  
   arrow = createSprite(550, 400, 50, 10);
  arrow.addImage(arrowX);
  arrow.scale = 0.3;
   
  
  function balloonPOP(){
  if(balloon.isTouching(arrow)){
  balloon.visible = false;
    score = score+1;
  }
  }
    if(keyDown("space")&& arrow.y >= 100) {
    arrow.velocityY = -100;
  }
  
}


function balloonPOP(){
  if(balloon.isTouching(arrow)){
  balloon.destroy(arrow);
    score = score+1;
  }
  }

function draw(){
  background.velocityX = -3;
  if(background.x < 0){
   background.x = background.width /2;

     }
  
  
  arrow.y =bow.y;           
  bow.y = mouseY;
  
  if(keyDown("space")) {
    arrow.velocityX = -50;
    
  if(arrow.x < 0) {
    arrow.x = 550;
    arrow.y =bow.y;   
  }
}
  
  

  drawSprites();
  spawnBalloons();
  balloonPOP();
  
   text("Score: "+score, 250 , 20);
  
}
 function spawnBalloons() {
  //write code here to spawn the balloons
  if (frameCount % 100 === 0) {
    balloon = createSprite(0,0,30,20);
   // balloon.addImage(blue_balloons);
      balloon.y = Math.round(random(10,350))
    balloon.scale = 0.1;
    balloon.velocityX = 3;
   
    
   
   var rand = Math.round(random(1, 3));
    switch(rand){
    case 1 : balloon.addImage(blue_balloons);
        balloon.velocityX = 7;
        if(arrow.isTouching(balloon)){
           blueScore = blueScore + 1;
           }
   break;
   case 2 : balloon.addImage(red_balloons);
        balloon.velocityX = 10;
        if(arrow.isTouching(balloon)){
           redScore = redScore + 3;
           }
    break;
     case 3 : balloon.addImage(green_balloons);
        balloon.velocityX = 5; 
        if(arrow.isTouching(balloon)){
           greenScore = greenScore + 1;
           }
      default:  break;
      
   
  }  
    
    
    balloon.lifetime = 180;
}
 }