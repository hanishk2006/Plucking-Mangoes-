const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint; 
function preload(){
	boy = loadImage("boy.png"); 
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	t1 = new tree(600,400,400,600); 
	g1 = new Ground(400, 680, 800, 20)
	s1 = new Stone(50,500,50); 
	m1 = new mango(600,300,50); 
	m2 = new mango(500,280,50); 
	m3 = new mango(650,150,50); 
	m4 = new mango(600,200,50); 
	m5 = new mango(700,250,50);
	sl1 = new SlingShot(s1.body, {x:50, y:530}); 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boy, 10,450, 200, 300); 
  t1.display(); 
  g1.display();
  s1.display();  
  m1.display();
  m2.display(); 
  m3.display();  
  m4.display();  
  m5.display(); 
  sl1.display(); 
  detectcollision(s1, m1); 
  detectcollision(s1, m2); 
  detectcollision(s1, m3); 
  detectcollision(s1, m4); 
  detectcollision(s1, m5); 
  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(s1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    sl1.fly();
}
function detectcollision (lstone, lmango){
	mangoBodyPosition=lmango.body.position
	stoneBodyPosition=lstone.body.position 

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y); 
	if(distance<=lmango.r+lstone.r)
	{
		Matter.Body.setStatic(lmango.body,false); 
	}
}

