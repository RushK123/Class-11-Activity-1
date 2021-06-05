//c10 Student Activity

var s1,s2,s3,s4;
var marks = [99,100,83,84,96];
var sprites =[];

avg(marks);

function setup() {
  createCanvas(400, 400);
  s1 = createSprite(75, 100, 30, 30);
  s2 = createSprite(150, 250, 30, 30);
  s3 = createSprite(300, 300, 30, 30);
  s4 = createSprite(350, 150, 30, 30);
 
  sprites = [s1,s2,s3,s4];
  for (var i = 0; i < sprites.length; i++){
    console.log("Sprite " + (i+1) + " x position- "+sprites[i].position.x);
    console.log("Sprite " + (i+1) + " y position- "+sprites[i].position.y);
  }

  
}
function draw() {

  background(100,200,50);
  drawSprites();
  
}

function avg(marks){
  sum = 0;
  for (var i=0; i<=(marks.length-1); i++) {
    sum = sum + marks[i]
  } 
  console.log(sum/(marks.length))
  
}

