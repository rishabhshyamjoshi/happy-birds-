const { Engine, World, Bodies, Mouse, MouseConstraint, Constraint } = Matter;

var ground;
var box1;
var bird;
var world, engine;
var mConstraint;
var slingshot;

var box;

function preload() {
  dotImg = loadImage("images/bird.png");
  boxImg = loadImage("images/pig.png");
  bkgImg = loadImage("images/background.png");
  woodImg = loadImage("images/wood2.png");
  woodImg1 = loadImage("images/wood1.png");
  sling1Img = loadImage("images/sling1.png");
}

function setup() {
  var canvas = createCanvas(1400, 650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);
  platform = new Ground(190,500,350,300);

  //log = new Log(900,65,130,20);
  wood1 = new Log(650,200,70,70);
 // wood2 = new Log(650,200,70,70);
  wood3 = new Log(650,200,70,70);
  wood4 = new Log(650,200,70,70);
  wood5 = new Log(650,200,70,70);
  wood6 = new Log(650,200,70,70);
 // wood7 = new Log(1080,200,70,70);
  wood8 = new Log(1080,200,70,70);
  wood9 = new Log(1080,200,70,70);
  wood10 = new Log(1080,200,70,70);
  wood11 = new Log(1080,200,70,70);
  wood12 = new Log(1080,200,70,70);
  wood13 = new Log(760,200,70,70);
  wood14 = new Log(760,200,70,70);
  wood15 = new Log(760,200,70,70);
  wood16 = new Log(880,50,500,25);
  wood17 = new Log(1005,120,70,70);
  wood18 = new Log(1005,120,70,70);
  wood19 = new Log(1005,120,70,70);
  wood20 = new Log(890,60,300,20);

  box = new Box(900,55, 60, 60);
  box1 = new Box(900,95,60,60);
  box2 = new Box(900,40, 60, 60);
  bird = new Bird(200, 190, 20);

  slingshot = new SlingShot(bird.body,{x:190, y:230});

  var mouse = Mouse.create(canvas.elt);
  var options = {
    mouse: mouse
      

  }
  
  mouse.pixelRatio = pixelDensity();
  mConstraint = MouseConstraint.create(engine, options);
  World.add(world, mConstraint);

}

function keyPressed() {
    World.remove(world, bird.body);
    bird = new Bird(170, 300, 20);
    slingshot.attach(bird.body);
    
  }


function mouseReleased() {
  setTimeout(() => {
   slingshot.fly();
  },20);
}

function draw() {
  background(bkgImg);
  Engine.update(engine);

  box.display();
  box1.display();
  box2.display();
  slingshot.display();
  
  //log.display();
  bird.display();

  platform.display();
  ground.display();

  wood1.display();
 // wood2.display();
  wood3.display();
  wood4.display();
  wood5.display();
  wood6.display();
  //wood7.display();
  wood8.display();
  wood9.display();
  wood10.display();
  wood11.display();
  wood12.display();
  wood13.display();
  wood14.display(); 
  wood15.display(); 
  wood16.display();
  wood17.display();
  wood18.display();
  wood19.display();
  wood20.display();
}
