console.log("Loading Snake");

const Paper = require("paper");

const Snake = require("./snake");

var canvas = document.getElementById("canvas");
Paper.install(window);
Paper.setup(canvas);


function createSnake(bodyLength, startingX, startingY) {
    var s = new Snake("Shhh", bodyLength);
    s.initializeSnake(startingX, startingY);
    s.renderSnake()

}


function generateBlocks() {
    console.log("Generate Blocks")
}

module.exports = {
    createSnake: createSnake,
    generateBlocks: generateBlocks
};