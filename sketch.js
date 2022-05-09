var cat
var mouse 

function preload() {
    //load the images here
GardenImage= loadImage("images/garden.png");
CatImage= loadAnimation("images/cat1.png");
catMoving= loadAnimation("images/cat2.png" , "images/cat3.png");
MouseImage= loadAnimation("images/mouse1.png");
MouseTeasing= loadAnimation("images/mouse2.png", "images/mouse3.png");
catLast= loadAnimation("images/cat4.png");
mouseLast= loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(870,600);
    cat.addAnimation("cat", CatImage);
    cat.scale = 0.2;

    mouse = createSprite(200,590);
    mouse.addAnimation("mouse", MouseImage);
    mouse.scale = 0.2;
}

function draw() {

    background(GardenImage);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catLast", catLast);
        cat.changeAnimation("catLast");
        cat.x=300;
        cat.scale=0.2;

        mouse.addAnimation("mouseLast", mouseLast);
        mouse.changeAnimation("mouseLast");
        mouse.scale=0.2;
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
      console.log("hi");
    mouse.addAnimation("MouseTeasing", MouseTeasing);
    mouse.changeAnimation("MouseTeasing");
    mouse.frameDelay = 25; 

    cat.velocityX = -5;
    cat.addAnimation("catMoving", catMoving);
    cat.changeAnimation("catMoving");
  }
    


}
