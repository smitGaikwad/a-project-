
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy,boylIMG;

function preload()
{
	boyIMG = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 800);

boy = createSprite(350,350,20,20);
boy.addImage("sprites/boyIMG");

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



