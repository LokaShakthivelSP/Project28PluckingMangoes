
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

function preload()
{
	treeImg=loadImage("tree.png");
	boyImg=loadImage("boy.png");	
}

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground();
	stone=new Stone(145,410,30);

	mango1=new Mango(750,200,25);
	mango2=new Mango(810,300,35);
	mango3=new Mango(720,150,30);
	mango4=new Mango(850,210,45);
	mango5=new Mango(900,290,50);
	
	chain =new Constrain(stone.body,{x:146,y:410});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  textAlign(CENTER);
  text("Press SPACE to get another chance",500,50)

  ground.display();

  imageMode(CENTER);
  image(treeImg,800,330,400,500);
  image(boyImg,200,490,200,300);

  stone.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();

  var x1=stone.body.position.x;
  var y1=stone.body.position.y;

  console.log(mango1.body);

var dist1=dist(stone.body.position.x,stone.body.position.y,mango1.body.position.x,mango1.body.position.y);
	if(dist1<=mango1.r+stone.r){
		Body.setStatic(mango1.body,false);
	}

var dist2=dist(stone.body.position.x,stone.body.position.y,mango2.body.position.x,mango2.body.position.y);
	if(dist2<=mango2.r+stone.r){
		Body.setStatic(mango2.body,false);
	}

var dist3=dist(stone.body.position.x,stone.body.position.y,mango3.body.position.x,mango3.body.position.y);
	if(dist3<=mango3.r+stone.r){
		Body.setStatic(mango3.body,false);
	}

var dist4=dist(stone.body.position.x,stone.body.position.y,mango4.body.position.x,mango4.body.position.y);
	if(dist4<=mango4.r+stone.r){
		Body.setStatic(mango4.body,false);
	}

var dist5=dist(stone.body.position.x,stone.body.position.y,mango5.body.position.x,mango5.body.position.y);
	if(dist5<=mango5.r+stone.r){
		Body.setStatic(mango5.body,false);
	}

  drawSprites();
}

function mouseDragged(){
    Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    chain.fly();
}

function keyPressed(){
	if(keyCode===32){
		chain.attach(stone.body);
		Body.setPosition(stone.body, {x: 145 , y: 410});
	}
}

