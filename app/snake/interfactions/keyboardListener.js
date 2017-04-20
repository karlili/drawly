function initializeKeyEventListener(s) {
    window.addEventListener("keydown", function (event) {
        console.log(event.key, " - ", event.keyCode);

        if (event.key === 'd') {
            s.moveRight();
            s.collisionDetection();
            s.renderSnake()
        }
        else if (event.key === 'a') {
            s.moveLeft();
            s.collisionDetection();
            s.renderSnake()
        }
        else if (event.key === 'w') {
            s.moveUp();
            s.collisionDetection();
            s.renderSnake()
        }
        else if (event.key === 's') {
            s.moveDown();
            s.collisionDetection();
            s.renderSnake()
        }

    })
}

module.exports = {
    initializeKeyEventListener: initializeKeyEventListener
};