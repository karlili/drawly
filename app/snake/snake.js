const _ = require("lodash");

const Segment = require("./segment");

class Snake {

    constructor(name, bodyLength) {
        console.log("Snake Constructor");
        this.name = name;
        this.bodyLength = bodyLength;

        this.SNAKE_BODY_SIZE = 10;
        this.PIXEL_BETWEEN_SNAKE_BODY = 2;
        this.segments = []

    }

    initializeSnake(startingX, startingY) {

        if (_.isNumber(this.bodyLength)) {
            for (let i = 0; i < this.bodyLength; i++) {

                var calculatedX = startingX + (i * ( this.SNAKE_BODY_SIZE + this.PIXEL_BETWEEN_SNAKE_BODY));
                var calculatedY = startingY;

                var segment = new Segment(calculatedX, calculatedY);
                this.segments.push(segment);
            }
        }
    }


    renderSnake() {
        console.log("Num of Segments in snake (", this.segments.length, ")");

        for (var i = 0; i < this.segments.length; i++) {
            var s = this.segments[i];
            var path = s.getPath();
            path.fillColor = "black";
        }
    }


    removeSegment(index) {
        this.segments[index].removePath();
    }

}

module.exports = Snake;

