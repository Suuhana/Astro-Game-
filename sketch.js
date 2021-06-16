var backGround, backGroundImg, astronaut;
var bath, brush, drive, eat, gym1, gym2, move, sleep;
var gameState = "start";

function preload() {
    backGroundImg = loadImage("iss.png");

    bath = loadAnimation("bath1.png","bath2.png","bath1.png","bath2.png");

    brush = loadAnimation("brush.png");
  
    drink = loadAnimation("drink1.png","drink2.png");
  
    eat = loadAnimation("eat1.png","eat2.png");
    
    gym1 = loadAnimation("gym1.png","gym2.png");
    
    gym2 = loadAnimation("gym3.png","gym4.png");
    
    move = loadAnimation("move.png");
    
    sleep = loadAnimation("sleep.png");
}

function setup() {
    createCanvas(400,400);

    astronaut = createSprite(200,200);
    astronaut.scale = 0.1;
}

function draw() {
    background(backGroundImg);

    drawSprites();

    if (gameState === "start") {
        fill("yellow");
        stroke("black");
        strokeWeight(6);
        textSize(30);
        text("Instructions: ",110,110);
        textSize(20);
        text("Press space key to Start",85,150);
        text("'A' Key - Bathing !!",110,180);
        text("'B' Key - Brushing !!",105,210);
        text("'C' Key - Driving !!",110,240);
        text("'D' Key - Eating !!",113,270);
        text("'E' Key - Gyming !!",110,300);
        text("'F' Key - Moving !!",113,330);
        text("'G' Key - Sleeping !!",107,360);
        
        if (keyDown("space")) {
          gameState = "play";
        }
    }

    if (gameState === "play") {
        if (keyDown("a")) {
            astronaut.addAnimation("bathing",bath);
            astronaut.changeAnimation("bathing");
            astronaut.y = 170;
            astronaut.scale = 0.07;
        }
        if (keyDown("b")) {
            astronaut.addAnimation("brushing",brush);
            astronaut.changeAnimation("brushing");
        }
        if (keyDown("c")) {
            astronaut.addAnimation("drinking",drink);
            astronaut.changeAnimation("drinking");
        }
        if (keyDown("d")) {
            astronaut.addAnimation("eating",eat);
            astronaut.changeAnimation("eating");
        }
        if (keyDown("e")) {
            astronaut.addAnimation("gyming",gym1);
            astronaut.changeAnimation("gyming");
        }
        if (keyDown("f")) {
            astronaut.addAnimation("moving",move);
            astronaut.changeAnimation("moving");
        }
        if (keyDown("g")) {
            astronaut.addAnimation("sleeping",sleep);
            astronaut.changeAnimation("sleeping");
        }
    }
    
}