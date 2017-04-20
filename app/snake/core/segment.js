
class Segment {

    constructor(posX, posY, isHead, isObsolete) {
        this.posX = posX;
        this.posY = posY;
        this.isHead = isHead;
    }

    headCheck() {
        return this.isHead;
    }

    updateHead(isHead) {
        this.isHead = isHead
    }

    updateObsolete(isObsolete) {
        this.isObsolete = isObsolete;
    }

    getPosX() {
        return this.posX;
    }

    getPosY() {
        return this.posY;
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
        // console.log("Path ID (",this.path.id,") Path Parent (",this.path.parent,")");
        this.path.parent.removeChildren();
    }

}

module.exports = Segment;