//creates car and wall
var car;
var wall;

//creates the varibles
var speed,weight,thickness;
var TS;


function setup() {
  createCanvas(windowWidth,windowHeight);

  //defines the car and wall
  car=createSprite(50,height/2,50,30);
  wall=createSprite(width-50,height/2,60,height/2);

  //sets the TS(test state) to s(start) when you load the website
  TS="s";

  speed=Math.round(random(223,321));
    weight=Math.round(random(30,52));
    thickness=Math.round(random(22,83));
  
}

function draw() {
  background(0); 
  
  //defines what happens when the TS(test state) is a s(start)
  if (TS=="s"){
  
    wall.width=thickness;

    //creates the text that says "Press SPACE to launch the car"
    textSize(30);
    text("Press SPACE to fire bullet",width/2,height-30);

    //resets the car's x and y postion
    car.x=50;
    car.y=height/2;
    
    //resets the car's color
    car.shapeColor=color(255);
    wall.shapeColor=color(123);


    //defines what happens when you press space 
    if (keyDown("space")){
      //switches the state to l(launch)
      TS="l";
    }
  }

  //defines what happen when the TS(test state) is l(launch)
  if (TS=="l"){
  
    //sets the car's speed
    car.velocityX=speed;

    //defines what happens when the car collides with the wall
    if (car.isTouching(wall)){
      //sets the TS(test state) to c(crash)
      TS="c";
    }
  }

  if (TS=="c"){

    //stops the car
    car.velocityX=0;


    //creates the text documenting the damage and how to reset the test
    textSize(30);
    text("Press R to reset the test",width/2,height-60);
    textSize(15);
    text("The damage was: " + WallTest(weight,speed,thickness),width/2,height-30);

    //defines what the color of the wall and bullet is
    if (WallTest(weight,speed,thickness)>10){
      //red
      car.shapeColor=color(255,0,0);
      wall.shapeColor=color(255,0,0);
    } else {
      //green
      car.shapeColor=color(255,0,0);
      wall.shapeColor=color(0,255,0);
    }

    //defines what happpens when the R is pressed
    if (keyDown("r")){
      //sets the TS(test state) to s(start)
      TS="s";

      //creates a random varible for the speed and weight of the car
    speed=Math.round(random(223,321));
    weight=Math.round(random(30,52));
    thickness=Math.round(random(22,83));
    }

  }

  //makes sprites visable
  drawSprites();
}

//the function for calculating the car's deformation
function WallTest(weight,speed,thickness){

  //the equation used for calculating the car's deformation
  return Math.floor(0.5*weight*speed*speed/(thickness*thickness*thickness));
  
}