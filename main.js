function preload(){
}

function setup(){
   canvas = createCanvas(500,400);
   canvas.position(70,200);
   video = createCapture(VIDEO);
   video.hide();
}

function draw(){
   Image(video,100,80,300,250);

   stroke(168, 10, 10);
   fill(168, 10, 10);

   circle(40,40,50);
   circle(460,40,50);
   circle(40,360,50);
   circle(460,360,50);
}
function take_snapshot(){
   save("frame.png");
}