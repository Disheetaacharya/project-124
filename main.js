function setup()
{
   canvas = createCanvas(300,350);
   canvas.center();

   video = createCapture(VIDEO);
   video.size(550,500);

   poseNet = ml5.poseNet(video , modelloaded);
   poseNet.on('pose' , gotposes);
}

function modelloaded()
{
    console.log("posenet is Initialized!");
}

function draw()
{
    background("#d3ffce");
}

