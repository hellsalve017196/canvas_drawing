var canvas = document.getElementById("canvas"); // canvas object
var context = canvas.getContext('2d'); // context object to draw

var radius = 10; // radius of the circle
var dragging = false; // mouse down or not
var erasermode = false; // erasermode on or not

canvas.width = window.innerWidth; // making width same as windows width
canvas.height = window.innerHeight; // making height same as windows height

// if window gets resized,canvas will get resized
/*every time window gets resized,the canvas is refreshed,we have to keep the existing image*/
window.onresize = function() {
  var img = context.getImageData(0,0,canvas.width,canvas.height);

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  context.putImageData(img,0,0);
}

var clearcanvas = function() {
    canvas.width = canvas.width;
    context.lineWidth = 2*radius;
}

document.getElementById("clear").addEventListener("click",clearcanvas); // clearing canvas

var erasermodealter = function() {
    if(erasermode)
    {
        erasermode = false;
    }
    else {
        erasermode = true;
    }
}

document.getElementById("eraser").addEventListener('click',erasermodealter);

context.lineWidth = 2*radius; // line width

var putPoint = function (e) // putting point on canvas
{
    if(!erasermode)
    {
        if(dragging) // if mouse is down then execute
        {
            context.lineTo(e.clientX, e.clientY);
            context.stroke();// drawing line

            context.beginPath(); // begining drawing
            context.arc(e.clientX, e.clientY,radius,0,Math.PI*2); // drawing circle
            context.fill(); // ending drawing

            //for making line
            context.beginPath(); // clear path
            context.moveTo(e.clientX, e.clientY);
        }
    }
    else if(erasermode && dragging)
    {
        context.clearRect(e.clientX,e.clientY,20,20);
    }
}

var engage = function (e) {

      dragging = true;

      putPoint(e);

}

var disengage = function () {
      dragging = false;

      context.beginPath(); // clearing path
}

canvas.addEventListener('mousedown',engage);
canvas.addEventListener('mouseup',disengage);
canvas.addEventListener('mousemove',putPoint); // mousedown event
