//keyDown
var obj = document.getElementById('test')
var dx = 0
var dy = 0
document.addEventListener('keydown',function(event){
    switch (event.key) {
        case "ArrowLeft":
            dx = dx - 10
            obj.style.left = dx + 'px'
            break;
        case "ArrowRight":
            dx = dx + 10
            obj.style.left = dx + 'px'
            break;
        case "ArrowUp":
            dy = dy - 10
            obj.style.top = dy + 'px'
            break;
        case "ArrowDown":
            dy = dy + 10
            obj.style.top = dy + 'px'
            break;
    }
})