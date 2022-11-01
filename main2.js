song1="";
song2="";

leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
function preload()
{
    song = loadSound("Harry Potter.mp3");
    song = loadSound("Pirate Pop.mp3");
}

function setup()
{
    canvas= createCanvas(500,400);
    canvas.center();
    canvas.position(440,200);

    video=createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded()
{
    console.log("posenet initialized");
}
function draw()
{
    image(video,0,0,600,500);
}

function gotPoses(results)
{
if(results.length>0)
{
    console.log(results);
    leftWristX=results[0].pose.leftWrist.x;
    leftWristY=results[0].pose.leftWrist.y;
    console.log("LeftWristX="+leftWristX+" LeftwristY="+leftWristY);
    rightWristX=results[0].pose.rightWrist.x;
    rightWristY=results[0].pose.rightWrist.y;
    console.log("RightwristX="+rightWristX+" rightwristY="+rightWristY);
}
}