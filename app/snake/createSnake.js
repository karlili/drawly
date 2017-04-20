console.log("Loading Snake");

const Paper = require("paper");
const Snake = require("./snake");
const screencheck = require("./dimension/screenCheck");
const keylistener = require("./interfactions/keyboardListener");

var canvas = document.getElementById("canvas");
Paper.install(window);
Paper.setup(canvas);


function initializeEnvironment(bodyLength, startingX, startingY) {
    var s = new Snake("Shhh", bodyLength);
    s.initializeSnake(startingX, startingY);
    s.renderSnake();

    screencheck.initializeWindowResizeListener();
    keylistener.initializeKeyEventListener(s)
}


function generateBlocks() {
    console.log("Generate Blocks")
}

module.exports = {
    initializeEnvironment: initializeEnvironment,
    generateBlocks: generateBlocks
};