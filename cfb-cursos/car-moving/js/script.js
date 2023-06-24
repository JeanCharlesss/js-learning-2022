//keyDown
var obj = document.getElementById('img')
var dx = 0
var dy = 0
var right = false
var left = false
var up = true
var down = false
var ang = 0
var anima 
var teste = document.addEventListener('keydown',function(event){
    switch (event.key) {
        case "ArrowLeft":
            dx = dx - 10
            obj.style.transform = `rotate(0deg)`
            obj.style.transform = `rotate(270deg)`
            obj.style.left = dx + 'px'
            left = true
            break;

        case "ArrowRight":
            dx = dx + 10
            obj.style.transform = `rotate(0deg)`
            obj.style.transform = `rotate(90Deg)`
            obj.style.left = dx + 'px'
            right = true
            break;
        case "ArrowUp":
            dy = dy - 10
            obj.style.transform = `rotate(0deg)`
            obj.style.transform = `rotate(0deg)`
            obj.style.top = dy + 'px'
            break;
        case "ArrowDown":
            dy = dy + 10
            obj.style.transform = `rotate(0deg)`
            obj.style.transform = `rotate(180deg)`
            obj.style.top = dy + 'px'
            break;
    }
})

anima = requestAnimationFrame(teste)