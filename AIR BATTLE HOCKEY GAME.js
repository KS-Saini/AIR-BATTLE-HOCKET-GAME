//THIS GAME MADE BY KULDEEP SAINI'S!
//CREATED ALL VARIABLES SEEING ON THE SCREEN!
var ball;
var goal1,goal2;
var playermallet,computermallet;
var playerscore;
var computerscore;
var restart,restartImage;
var gameState = "serve";
var dieSound;

function preload(){
//LOADED A RESTART IMAGE TO RESTART THE GAME!
restartImage = loadImage("restart.png");
//LOADED DIESOUND 
dieSound = loadSound("die.mp3")

}

function setup()
{
createCanvas(400, 400);

ball = createSprite(200,200,20,20)
ball.shapeColor = "white";

goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

playermallet = createSprite(200,50,50,10);
playermallet.shapeColor = "black";

computermallet = createSprite(200,350,50,10);
computermallet.shapeColor = "black";

//MADE A RESTART OBCJECT
restart = createSprite(200,160);
restart.addImage(restartImage);
restart.scale = 0.5;
restart.visible =false;

//MAKING THE SCORE 
playerscore = 0;
computerscore = 0;

//DEFINED GAMESTATE
gameState = "serve";
  
}

function draw() 
{  
background("green");
textSize(18);
fill("maroon");
text(playerscore,25,225);
text(computerscore,25,185);

//THIS OBJECT WILL BE COLLDING ONE ANOTHER EDGES
edges = createEdgeSprites();
ball.bounceOff(edges);
ball.bounceOff(playermallet);
ball.bounceOff(computermallet);

//THE COMPUTERMALLET MOVING WITH BALL OBJECT
computermallet.x = ball.x;

//MADE A CONDITION IF BALL TOUCH WITH GOAL2 THEN PLAYER TAKEN 1 SCORE
if(ball.isTouching(goal1))
{
  dieSound.play();
   //increment the score of the player
   playerscore = playerscore + 1 ;
   ball.x=200;
   ball.y=200;
   ball.velocityX=0;
   ball.velocityY=0;

   gameState = "serve";

}

//MADE A CONDITION IF BALL TOUCH WITH GOAL2 THEN COMPUTER TAKEN 1 SCORE
if(ball.isTouching(goal2))
{
  computerscore = computerscore + 1;
  ball.x=200;
  ball.y=200;
  ball.velocityX=0;
  ball.velocityY=0;

  gameState = "serve";

}

//GIVING THE ALL GAMESTATE CONDITIONS FOR GAME RUNING STEP BY STEP
if(gameState =="serve")
{
  textSize(25);
  text("press enter to start the game:",50,149);
  restart.visible = false
}

if(keyDown("enter") && gameState == "serve")
{
ball.velocityX = 10;
ball.velocityY = -10;
gameState = "play";
}

//MAKING TWO CONDITIONS TO CHECK PLAYER AND COMPUTER SCORE
if(playerscore == 5 || computerscore == 5){
  fill("maroon");
  textSize(25);
  text(" GAME OVER ",148,128);
  gameState = "over";
}

if(gameState == "over")
{
  textSize(21);
  fill("darkblue");
  text("press on the RESTARTBT to restart game:",3,101);
  restart.visible = true
   
 }
// CALLED DRAWNET FUNCTION 
drawnet();
// CALLED PADDLE MOVEMENT FUNCTION
PaddleMovement();
// CALLED OVER FUNCTION
OVER();

  drawSprites();
}

//THIS FUNCTION MAKE A MIDDLE IN CANVAS
function drawnet()
{

for(var i = 0 ;i < 400; i=i+20)
{

  line(i,200,i+10,200);
}

}

//THSI FUNCTION HELP IN MOVING THE PADDLE
function PaddleMovement()
{

  if(keyDown("left"))
  {
    playermallet.x = playermallet.x - 10;
  }

  if(keyDown("right"))
  {
    playermallet.x = playermallet.x + 10;
  }

  if(keyDown("up"))
  {
    if(playermallet.y>25)
   {
    playermallet.y = playermallet.y- 10;
   }
  }

  if(keyDown("down"))
  {
    if(playermallet.y<120)
    {
     playermallet.y = playermallet.y+10;
    }

  }

}

//THIS FUNCTION TO RESTART THE GAME
function OVER()
{

if(gameState == "over")
{

  restart.visible = true;
    
  if(mousePressedOver(restart)&&gameState=="over"){
  
  computerscore = 0;
  playerscore = 0;
  
  gameState = "serve"

}

}

}

