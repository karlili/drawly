console.log("Loading Snake");
const Paper = require("paper");
const _ = require("lodash");


var canvas = document.getElementById("canvas");
Paper.install(window);
Paper.setup(canvas);


const SNAKE_BODY_SIZE = 10;
const PIXEL_BETWEEN_SNAKE_BODY = 2;

function createSnake(bodyLength, startingX, startingY) {
    if (_.isNumber(bodyLength)) {
        for (let i = 0; i < bodyLength; i++) {

            var calculatedX = startingX + (i * ( SNAKE_BODY_SIZE + PIXEL_BETWEEN_SNAKE_BODY));
            var calculatedY = startingY;

            var topLeft = new Point(calculatedX, calculatedY);
            var rectSize = new Size(SNAKE_BODY_SIZE, SNAKE_BODY_SIZE);
            var rect = new Rectangle(topLeft, rectSize);
            var path = new Path.Rectangle(rect);
            path.fillColor = "black";
            console.log(rect);
        }

    }
}

module.exports = {
    createSnake: createSnake
};