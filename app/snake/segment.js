class Segment {

    constructor(posX, posY) {
        this.posX = posX;
        this.posY = posY;
    }

    getPosX() {
        return this.posX
    }

    getPosY() {
        return this.posY
    }

    getSegment() {
        console.log("Position X (", this.posX, ") Position Y (", this.posY, ")")
    }

    getPath() {
        var topLeft = new Point(this.posX, this.posY);
        var rectSize = new Size(10, 10);
        var rect = new Rectangle(topLeft, rectSize);
        this.path = new Path.Rectangle(rect);
        return this.path;
    }

    removePath() {
        this.path.remove();
    }
}

module.exports = Segment;