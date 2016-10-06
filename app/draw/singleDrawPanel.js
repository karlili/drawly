console.log("Single Draw Panel");
var Paper = require("paper");



var canvas = document.getElementById("canvas");
Paper.install(window);
Paper.setup(canvas);

var path = new Path();
var tool = new Tool();


//On Mouse Down
tool.onMouseDown = function(event) {
       path = new Path();
       path.fullySelected = false;
       path.strokeColor = 'black';
       path.strokeWidth = 5;
       path.add(event.point);
   };

//On Mouse Drag
tool.onMouseDrag = function(event) {
       path.add(event.point);
   };

//On Mouse Up
tool.onMouseUp = function (event) {
        var beforeSegmentCount = path.segments.length;
        path.smooth();
        path.simplify();
        var afterSegmentCount = path.segments.length;

        console.log("After smoothing and simplifying path. Before(" + beforeSegmentCount + ") After(" + afterSegmentCount + ")");
        console.log("Path Statistics. StrokeColor("+path.strokeColor.toString()+") StrokeWidth("+path.strokeWidth+")");

    };
