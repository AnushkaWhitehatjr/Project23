var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,rect2,rect3;
var redbox1,redbox2,redbox3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	redbox1 = createSprite(width/2,height-50,200,20);
	redbox1.shapeColor=color("red");

	redbox2 = createSprite(290,610,20,100);
	redbox2.shapeColor=color("red");

	redbox3 = createSprite(510,610,20,100);
	redbox3.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic:true, friction:0});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground,);

	rect1 = Bodies.rectangle(width/2,height-50,200,20, {isStatic:true} );
	World.add(world, rect1,);

	rect2 = Bodies.rectangle(290,610,20,100, {isStatic:true} );
	World.add(world, rect2,);

	rect3 = Bodies.rectangle(510,610,20,100, {isStatic:true} );
	World.add(world, rect3,);
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) 
 {
   Matter.Body.setStatic(packageBody,false);
 }
}



