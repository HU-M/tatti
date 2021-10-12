upperlipX=0;
upperlipY=0;

function preload() { 
    clown_moustache = loadImage('https://i.postimg.cc/Gh7gDQrZ/Moustache.png');   
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        upperlipX = results[0].pose.upperlip.x;
        upperlipY = results[0].pose.upperlip.y;
    }
}

function draw() {    
    image(video, 0, 0, 300, 300);
    image(clown_moustache, upperlipX, upperlipY, 30, 30);
}

function take_snapshot() {
    save('myFilterImage.png');
}