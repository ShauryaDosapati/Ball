const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
function preload() {}
var width = 800
function setup() {
    createCanvas(width, 500);


    engine = Engine.create();
    world = engine.world;

    var ball_options = {
        isStatic: false,
        restitution: 0.93,
        friction: 0,
        density: 1.2

    }

    // Create the Bodies Here.
    ball = Bodies.circle(200, 100, 20, ball_options)
    World.add(world, ball);

    groundObj = new ground(width / 2, 470, width, 20)
    leftSide = new ground(300, 400, 20, 120)


    rectMode(CENTER);
    ellipseMode(RADIUS);


}


function draw() { // rectMode(CENTER);
    background(0);

    ellipse(ball.position.x, ball.position.y, 20)


    groundObj.show();
    leftSide.show();


    // drawSprites();
    Engine.update(engine);

}

function keyPressed() {
    console.log("key code is-->", keyCode)
    if (keyCode === UP_ARROW) {
        hForce();
    }
}

function hForce() {
    console.log('calling_hforce -->', ball.position.x, " -->", ball.position.y);
    Matter.Body.applyForce(ball, {
        x: ball.position.x,
        y: ball.position.y
    }, {
        x: 7,
        y: 0
    })
}
