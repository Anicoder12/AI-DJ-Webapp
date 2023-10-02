    music = ""
    leftwristx = 0
    leftwristy = 0
    rightwristx = 0
    rightwristy = 0

function preload() 
{
music = loadSound("music.mp3");
}

function setup()
{
canvas = createCanvas(300,300);
canvas.center();

video = createCapture(VIDEO);
video.hide();

pn = ml5.poseNet(video, modelLoaded);
pn.on("pose", gotPoses);  
}

function draw()
{
image(video, 0, 0, 300, 300);
}

function play_song()
{
music.play();
music.setVolume(1);
music.rate(1);
}

function modelLoaded()
{
    console.log("Model has been loaded.")
}

function gotPoses(results)
{
if(results.length > 0) 
{
console.log(results);
leftwristx = results[0].pose.leftWrist.x;
leftwristy = results[0].pose.leftWrist.y;
rightwristx = results[0].pose.rightWrist.x;
rightwristy = results[0].pose.rightWrist.y;
console.log("leftwristx = " + leftwristx, "leftwristy = " + leftwristy);
console.log("rightwristx = " + rightwristx, "rightwristy = " + rightwristy);
}
}