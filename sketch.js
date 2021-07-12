var cat, catImg1,catImg2,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3

var bgImg
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png")
    catImg1=loadAnimation('images/cat1.png')
    catImg2=loadAnimation('images/cat2.png',"images/cat3.png")
    catImg3=loadAnimation('images/cat4.png')
    

    mouseImg1=loadAnimation('images/mouse1.png')
    mouseImg2=loadAnimation('images/mouse2.png',"images/mouse3.png")
    mouseImg3=loadAnimation('images/mouse4.png')
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900,600);
    cat.addAnimation('cat',catImg1);
    cat.scale=0.25

    mouse = createSprite(200,600)
    mouse.addAnimation('mouseStanding',mouseImg1)
    mouse.scale= 0.15

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x - mouse.x < (cat.width -mouse.width)/2){
  cat.velocityX=0
  mouse.addAnimation('mouse3',mouseImg3);
mouse.changeAnimation('mouse3')

cat.addAnimation('catRunning3',catImg3)
cat.changeAnimation('catRunning3');



}



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode=== LEFT_ARROW){
mouse.addAnimation('mouse2',mouseImg2);
mouse.changeAnimation('mouse2')

cat.addAnimation('catRunning',catImg2)
cat.changeAnimation('catRunning');
cat.velocityX = -5





}

}
