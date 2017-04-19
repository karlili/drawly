const _ = require("lodash");

const Segment = require("./segment");

class Snake {

    constructor(name, bodyLength) {
        console.log("Snake Constructor");
        this.name = name;
        this.bodyLength = bodyLength;

        this.SNAKE_BODY_SIZE = 10;
        this.PIXEL_BETWEEN_SNAKE_BODY = 2;
        this.PIXEL_MOVEMENT = 5;
        this.segments = []

    }

    /**
     * Initialize the structure of the snake, and it's segments
     * @param startingX
     * @param startingY
     */
    initializeSnake(startingX, startingY) {

        if (_.isNumber(this.bodyLength)) {
            for (let i = 0; i < this.bodyLength; i++) {

                var calculatedX = startingX - (i * ( this.SNAKE_BODY_SIZE + this.PIXEL_BETWEEN_SNAKE_BODY));
                var calculatedY = startingY;
                var isHead = (i === 0) ? true : false;
                var segment = new Segment(calculatedX, calculatedY, isHead, false);
                this.segments.push(segment);
            }
        }
        console.log("Snake Initialized", this.segments);
    }

    /**
     * Render the Snake on the page
     */
    renderSnake() {
        console.log("Num of Segments in snake (", this.segments.length, ")");

        for (var i = 0; i < this.segments.length; i++) {
            var s = this.segments[i];

            var path = s.getPath();
            if (s.headCheck()) {
                path.fillColor = 'red'
            } else {
                path.fillColor = 'black'
            }


        }
    }

    /**
     * To Remove a Particular Segment in a Snake
     * @param index
     */
    removeSegment(index) {
        this.segments[index].removePath();

    }


    /**
     * Moving meaning to advance the head to the desired location,
     * and the following segment will just "move forward"
     * this means the following segment will take place the position which the head had.
     * so this actually means, the last segment will replace the n-1 segment
     * i.e. removing the last segment and the head will advance
     *
     * This will be the general logic to cope with the movement of the segment
     */


    moveRight() {
        console.log("Move Right");
        //get the current position of X and Y, increment X by 5 pixel
        console.log("Current Segment Length(", this.segments.length, ")");

        var origHead = this.segments[0];
        origHead.updateHead(false);

        //Add a Head Segment with the new movement
        var newHead = new Segment(origHead.getPosX() + this.SNAKE_BODY_SIZE + this.PIXEL_BETWEEN_SNAKE_BODY, origHead.getPosY(), true);
        this.segments.unshift(newHead);

        //Remove the Tail Segment
        var origTail = this.segments[this.segments.length - 1];
        this.removeSegment(this.segments.length - 1);
        this.segments.pop(origTail);


        console.log("New Snake", this.segments);

    }

    moveLeft() {
        console.log("Move Left");

        console.log("Current Segment Length(", this.segments.length, ")");

        var origHead = this.segments[0];
        origHead.updateHead(false);

        var newHead = new Segment(origHead.getPosX() - this.SNAKE_BODY_SIZE - this.PIXEL_BETWEEN_SNAKE_BODY, origHead.getPosY(), true);
        this.segments.unshift(newHead);

        //Remove the Tail Segment
        var origTail = this.segments[this.segments.length - 1];
        this.removeSegment(this.segments.length - 1);
        this.segments.pop(origTail);

        console.log("New Snake", this.segments);

    }

    moveDown() {
        console.log("Move Down");

        //get the current position of X and Y, increment X by 5 pixel
        console.log("Current Segment Length(", this.segments.length, ")");

        var origHead = this.segments[0];
        origHead.updateHead(false);

        //Add a Head Segment with the new movement
        var newHead = new Segment(origHead.getPosX(), origHead.getPosY() + this.SNAKE_BODY_SIZE + this.PIXEL_BETWEEN_SNAKE_BODY, true);
        this.segments.unshift(newHead);

        //Remove the Tail Segment
        var origTail = this.segments[this.segments.length - 1];
        this.removeSegment(this.segments.length - 1);
        this.segments.pop(origTail);


        console.log("New Snake", this.segments);

    }

    moveUp() {
        console.log("Move Up");

        //get the current position of X and Y, increment X by 5 pixel
        console.log("Current Segment Length(", this.segments.length, ")");

        var origHead = this.segments[0];
        origHead.updateHead(false);

        //Add a Head Segment with the new movement
        var newHead = new Segment(origHead.getPosX(), origHead.getPosY() - this.SNAKE_BODY_SIZE - this.PIXEL_BETWEEN_SNAKE_BODY, true);
        this.segments.unshift(newHead);

        //Remove the Tail Segment
        var origTail = this.segments[this.segments.length - 1];
        this.removeSegment(this.segments.length - 1);
        this.segments.pop(origTail);


        console.log("New Snake", this.segments);
    }

}

module.exports = Snake;

