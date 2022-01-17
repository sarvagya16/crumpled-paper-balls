var ball;
var ground;
var leftSide,rightSide;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

var ballOptions ={
	isStatic:false,
	restitution:0.3,
	fiction:0,
	density:1.2
};
ball =Bodies.circle(250,100,40,ballOptions)
World.add(world,ball)

	Engine.run(engine);
	ground =new Ground(800,670,1600,20)

	leftSide =new Ground(1100,600,20,120)

	rightSide=new Ground(1350,600,20,120)
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,40, 40)
  ground.show();
  leftSide.show();
  rightSide.show();
  
  drawSprites();
 
}
function keyPressed(){
if(keyCode===UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})	
}	
}



