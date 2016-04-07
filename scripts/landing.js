var pointsArray = document.getElementsByClassName('point');

function forEach(array, callback) {
    "use strict";
    for (var i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

var revealPoint = function (points) {
    "use strict";
    points.style.opacity = 1;
    points.style.transform = "scaleX(1) translateY(0)";
    points.style.msTransform = "scaleX(1) translateY(0)";
    points.style.WebkitTransform = "scaleX(1) translateY(0)";
};

var animatePoints = function (points) {
    "use strict";
    forEach(points, revealPoint);
};

window.onload = function () {
    "use strict";
    if (window.innerHeight > 950) {
        animatePoints(pointsArray);
    }

    window.addEventListener('scroll', function (event) {
        if (pointsArray(0).getBoundingClientRect().top <= 500) {
            animatePoints(pointsArray);
        } 
    });
};