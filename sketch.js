//Declaring variables for car and wall.
var car, wall;

//Declaring variables for speed, weight and deformation.
var speed, weight, deformation;

function setup(){

    //Creating canvas.
    createCanvas(1600, 400);

    //Setting random speed and weight. Putting formula for deformation.
    speed = Math.round(random(55, 90));
    weight = Math.round(random(400, 1500));
    deformation = (0.5 * weight * Math.pow(speed, 2))/22500;

    //Creating wall and giving it color.
    wall = createSprite(1500, 200, 60, height/2);
    wall.shapeColor = color(80, 80, 80);
    
    //Creating car, giving it color and moving it.
    car = createSprite(50, 200, 50, 50);
    car.shapeColor = "white";
    car.velocityX = speed;

}

function draw(){

    //Hiding multiple sprites.
    background(0);

    //Stopping the car, changing the color of it and showing it.
    if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
      car.velocityX = 0;

      if(deformation < 100){
        car.shapeColor = color(0, 255, 0);
        textSize(20);
        fill("green");
        text("Your car is safe. Your car's deformation is " + deformation + " strain.", 500, 200);
      } else if(deformation > 100 && deformation < 180){
        car.shapeColor = color(230, 230, 0);
        textSize(20);
        fill("yellow");
        text("Your car is not so much safe. Your car's deformation is " + deformation + " strain", 400, 200);
      } else if(deformation > 180){
        car.shapeColor = color(255, 0, 0);
        textSize(20);
        fill("red");
        text("Your car is dangerous. Your car's deformation is " + deformation + " strain.", 500, 200);
      }
    }

    drawSprites();

}