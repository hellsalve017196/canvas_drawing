var canvas = document.getElementById("canvas"); // canvas object
var context = canvas.getContext('2d'); // context object to draw

var radius = 10; // radius of the circle
var dragging = false; // mouse down or not

canvas.width = window.innerWidth; // making width same as windows width
canvas.height = window.innerHeight; // making height same as windows height

context.lineWidth = 2*radius; // line width

var putPoint = function (e) // putting point on canvas
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


