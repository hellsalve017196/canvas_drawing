var setRadius = function (newRadius) {
    if(newRadius < minRad)
    {
        newRadius = minRad;
    }
    else if(newRadius > maxRad)
    {
        newRadius = maxRad;
    }

    radius = newRadius;

    context.lineWidth = radius*2;

    radSpan.innerHTML = radius;
};

var minRad = 0.5,
    interval = 5,maxRad = 100,defaultRad = 20,
    radSpan = document.getElementById("radval"),
    decRad = document.getElementById("decrad"),
    incRad = document.getElementById("incrad");

    decRad.addEventListener('click', function () {
        setRadius(radius - interval);
    });

    incRad.addEventListener('click', function () {
        if(radius == minRad)
        {
            radius = 0;
        }
        setRadius(radius + interval);
    });

setRadius(defaultRad);