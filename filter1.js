

noseX = 0;
noseY = 0;




function preload()
{

    clown_nose=loadImage('https://i.postimg.cc/CLhyNcHs/m.png');

}

function setup()
{
    canvas = createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded()
{
    console.log('poseNet is initialized');
}

function draw()
{
    image(video,0,0,300,300);

    circle(noseX,noseY, 20);
    fill(0,128,0);
    stroke(0,128,0);

    image(clown_nose,noseX,noseY,40,40);

}

function take_snapshot()
{
    save('MyFilterImage.png');
}



function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x -20;
        noseY=results[0].pose.nose.y -0;

        console.log("nose X = " + noseX);
        console.log("nose y = " + noseY);

    }
}

function logout()
{
    window.location = "index.html";
}