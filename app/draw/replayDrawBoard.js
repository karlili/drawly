var Paper = require("paper");
require("path");

Paper.install(window);

var recordedPath = [];
var canvasContainer = document.getElementById('canvascontainer');

function updateCanvas(canvasId, paths) {

    var canvas = document.createElement('canvas');
    canvas.id = canvasId;
    canvasContainer.appendChild(canvas);
    Paper.setup(canvas);

    //Looping the existing path array and re-draw the paths
    for (i = 0; i < paths.length; i++) {
        var path = new Path(path[i]);
        path.strokeColor = 'black';
        path.strokeWidth = 5;
        paper.view.draw();
    }
}

//To remove the existing canvas using the canvasId
function removeCanvas(canvasId){
    var canvasToRemove = document.getElementById('canvasId');
    canvasToRemove.parentNode.removeChild(canvasToRemove);
}