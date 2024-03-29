console.log("Loading Snake");

const Paper = require("paper");
const Snake = require("./core/snake");
const screencheck = require("./dimension/screenCheck");
const keylistener = require("./interfactions/keyboardListener");

var canvas = document.getElementById("canvas");
Paper.install(window);
Paper.setup(canvas);

const viewSize = view.size;


function initializeEnvironment(bodyLength) {
    var s = new Snake("Shhh", bodyLength);
    var startingPoint = view.center;
    s.initializeSnake(startingPoint.x, startingPoint.y);
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