var sea;
var ship;
var sea_image;
var ship_Image;

function preload () {
sea_image=loadImage ("sea.png");

ship_image=loadAnimation ("ship-1.png","ship-1.png","ship-2.png","ship-1.png");

}

function setup () {
createCanvas (600,600);
background (rgb (135,206,235));
 // Movendo o fundo
 sea=createSprite(400,400);
 sea.addImage(sea_image);
 sea.velocityX = -5;
 sea.scale=0.3;

 
 ship = createSprite(130,400,30,30);
 ship.addAnimation("movingShip",ship_image);
 ship.scale =0.25;
 
}

function draw () {


//velocidade do navio
sea.velocityX = -3;

  
  //código para redefinir o fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
drawSprites ();
}