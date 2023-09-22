var form,game,player,playerCount;
var backGroundImg;
var database,gameState;
var archer1,archer2;
var archers = []
var archer1Img,archer2Img;
var allPlayers;
var obstacles,obstaclesimg;
var obstaclesGroup
var powerUp,powerUpimg,powerUpgroup
function preload()
{
backGroundImg = loadImage("assets/bg.webp")
resetImg = loadImage("assets/reset.png");
obstaclesimg=loadImage("assets/potion.png")
powerUpimg=loadImage("assets/powerUp.png")
}



function setup()
{
createCanvas(1200,600);
database = firebase.database();
game = new Game();
game.getState();
game.start();

}



function draw()
{
background (backGroundImg);

if (playerCount === 2) {
    game.update(1);
  }

if (gameState === 1) {
    game.play();
  }
}
