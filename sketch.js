var canvas;
var music;
var box;
var block1,block2,block3,block4;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
canvas = createCanvas(800,600);

//create box sprite and give velocity
box = createSprite(random(20,270),50,50,50);
box.shapeColor ="white";

box.velocityX=5;
box.velocityY=5;

//create 4 different surfaces

block1 = createSprite(5,580,300,30);
block1.shapeColor = "blue";

block2 = createSprite(270,580,200,30);
block2.shapeColor = "orange";

block3 = createSprite(485,580,200,30);
block3.shapeColor = "pink";

block4 = createSprite(780,580,360,30);
block4.shapeColor = "green";

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

edges = createEdgeSprites();
box.bounceOff(edges);

music.play();

    //add condition to check if box touching surface and make it box

    if (block1.isTouching(box)&& box.bounceOff(block1)) {
box.shapeColor = "blue";
    }

if (block2.isTouching(box)&& box.bounceOff(block2)) {
box.shapeColor = "orange";

}

if (block3.isTouching(box)&& box.bounceOff(block3)) {
box.shapeColor = "pink";
box.velocityX = 0;
box.velocityY = 0;
music.stop();
 }

 if (block4.isTouching(box)&& box.bounceOff(block4)) {
box.shapeColor = "green";
}

    box.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();

}
