function initializeWindowResizeListener() {
    window.addEventListener("resize", function (event) {
        console.log("Resizing to", window.innerWidth, "X", window.innerHeight)
    });
}


module.exports = {
    initializeWindowResizeListener: initializeWindowResizeListener
};