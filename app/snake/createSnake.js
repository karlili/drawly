console.log("Loading Snake");

const Paper = require("paper");
const Snake = require("./snake");

function onKeyDown(event) {
    console.log(event.key);
}



var canvas = document.getElementById("canvas");
Paper.install(window);
Paper.setup(canvas);


function initializeEnvironment(bodyLength, startingX, startingY) {
    var s = new Snake("Shhh", bodyLength);
    s.initializeSnake(startingX, startingY);
    s.renderSnake();


    window.addEventListener("keydown", function (event) {
        console.log(event.key, " - ", event.keyCode);

        if (event.key === 'd') {
            s.moveRight();
            s.renderSnake()
        }
        else if (event.key === 'a') {
            s.moveLeft();
            s.renderSnake()
        }
        else if (event.key === 'w') {
            s.moveUp();
            s.renderSnake()
        }
        else if (event.key === 's') {
            s.moveDown();
            s.renderSnake()
        }
    })
}


function generateBlocks() {
    console.log("Generate Blocks")
}

module.exports = {
    initializeEnvironment: initializeEnvironment,
    generateBlocks: generateBlocks
};