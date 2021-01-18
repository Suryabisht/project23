var canvas;
var music;
var surface1, surface2, box

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

    surface1 = createSprite(150,600,10,400) ;
    
    surface2 = createSprite(450,600,10,400) ;

    //create box sprite and give velocity

    box = createSprite(random(20,750)) ;
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

    box.collide(canvas) ;


    //add condition to check if box touching surface and make it box

    if(surface1.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "green" ;
    }

    if(surface2.isTouching(box) && box.bounceOff(surface1)) {
        box.shapeColor = "blue" ;
    }
}
