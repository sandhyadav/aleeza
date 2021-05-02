var canvas, backgroundImage;

var gameState = 0,finishedPlayers;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var Finish;
var form, player, game;

var cars, car1, car2, car3, car4;
var track, car1_img, car2_img, car3_img, car4_img;
var F1, F2;
var obstacles;
var S;
function preload(){
  track = loadImage("images/track.jpg");
  car1_img = loadImage("images/car1.png");
  car2_img = loadImage("images/car2.png");
  car3_img = loadImage("images/car3.png");
  car4_img = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  F1 = loadImage("images/f1.png");
  S = loadSound("sound/sliding.mp3");
  bm = loadImage("images/bronze.png");
  sm = loadImage("images/silver.png");
  gm = loadImage("images/gold.png");
}

function setup(){
  canvas = createCanvas(displayWidth , displayHeight);
  database = firebase.database();
  gameState = 0;
  distance = 0;
 // finishedPlayers = 0;
  yVel = 0;
  xVel = 0;
obstacles = createGroup()
  xSet = false;
  game = new Game();
  game.getState();
  game.start();
  for(i = 0 ; i < 5 ; i ++){
  w = random(200, 950);
  h = random(-height * 4, height - 300);
  F2 = createSprite(w, h)
  F2.addImage("F1", F1) 
  obstacles.add(F2);
  }
}



function draw(){
   //start the game
   background(200, 200, 255);

   //start the game
   if (playerCount === 4 && finishedPlayers == 0 ) {
     game.update(1);
   }
 
   //start the game for real
   if (gameState === 1) {
     game.play();
   }
   if (gameState === 4) {
     console.log("End");
     game.update(2);
   }
   if(gameState == 2 && finishedPlayer == 4){
   game.displayRanks();  
   }
  }

 
