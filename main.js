img="";
status= "";
objects=[];

function setup()
{
    canvas= createCanvas(600, 400);
    canvas.center();
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML= "Status: detecting object";
}
function preload()
{
    img= loadImage('dog_cat.jpg');
}
function draw()
{
    image(img, 0 , 0, 600, 400);

    if(status!="")
    {
        for(i= 0; i<objects.lenght; i++)
        {
            document.getElementById("status").innerHTML= "status: objectDetected";
            fill("#d96338");
            percent= floor(objects[i].confidence**100);
            text(objects[i].label+""+percent+"%", objects[i].x+15, objects[i].y+15);
            noFill();
            stroke("#d96338");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].hieght);

        }
     }

}
function modelLoaded()
{
    console.log("modelLoaded");
    status= true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        objects= results;
    }
}