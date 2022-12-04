song1="";
song2="";
scoreleftwrist=0;
scorerightwrist=0;
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";
song_status="";
function preload()
{
    song1 = loadSound("Harry Potter.mp3");
    song2 = loadSound("Pirate Pop.mp3");
}

function setup()
{
    canvas= createCanvas(600,400);
    canvas.center();
    canvas.position(400,200);

    video=createCapture(VIDEO);
    video.hide();
    poseNet= ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotPoses);
}

function modelLoaded()
{
    console.log("posenet initialized");
}



function gotPoses(results)
{
if(results.length>0)
{   console.log(results);
    scoreleftwrist=results[0].pose.keypoints[9].score;
    scorerightwrist = results[0].pose.keypoints[10].score;
    console.log("score"+scoreleftwrist+scorerightwrist);
    //Score end//
    console.log(results);

    leftWristX=results[0].pose.leftWrist.x;

    leftWristY=results[0].pose.leftWrist.y;

    console.log("LeftWristX="+leftWristX+" LeftwristY="+leftWristY);
    //left end//


    rightWristX=results[0].pose.rightWrist.x;

    rightWristY=results[0].pose.rightWrist.y;

    console.log("RightwristX="+rightWristX+" rightwristY="+rightWristY);
    //right end//
}
}
function draw()
{
    image(video,0,0,600,500);
    fill("#FF0000");
    stroke("#FF0000");
    song_name1=song1.isPlaying();
    song_name2=song2.isPlaying();

    if(scoreleftwrist>0.2)
    {
        circle(leftWristX,leftWristY, 4);
        song2.stop();
        if(song_name1==false){
            song1.play();
            console.log("Song Name: harry Potter ");
            document.getElementById("song name").innerHTML="Song Name: harry Potter";
        }
    }
    if(scorerightwrist>0.2)
    {
        circle(rightWristX,rightWristY, 4);
        song1.stop();
        if(song_name2==false){
            song2.play();
            console.log("Song Name:Peter Pan ");
            document.getElementById("song name").innerHTML="Peter pan";
        }

    }

}