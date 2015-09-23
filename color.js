var swatches = document.getElementsByClassName('swatch');

var setColor = function(color) {
    //arch color
    context.fillStyle = color;

    // line color
    context.strokeStyle = color;

    var active = document.getElementsByClassName('active')[0];

    if(active)
    {
        active.className = 'swatch';
    }
};

var setSwatch = function(e) // setting color
{
    //identify swatch
    var swatch = e.target; // selected swatch

    //set color
    setColor(swatch.style.backgroundColor);

    //give active class
    swatch.className = "swatch active"; // changing class
};

for(i=0;i<swatches.length;i++)
{
    swatches[i].addEventListener('click',setSwatch);
}

setSwatch({target:document.getElementsByClassName('swatch')[0]}); // setting first swatch active