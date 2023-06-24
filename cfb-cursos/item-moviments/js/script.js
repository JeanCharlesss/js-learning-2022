var obj;
var dx;
var dy;
var px;
var py;
var vel;
var tmp;
obj = document.getElementById('dv1')
function iniciar(){
    dx = 0
    dy = 0
    px = 0
    py = 0
    vel = 30
    tmp = setInterval(enterFrame,30)
    document.addEventListener('keydown', kDown)
    document.addEventListener('keyup', kUp)
}
function kDown(event){
    obj.style.backgroundColor = 'rgba(255, 49, 49, 0.979)'
    switch(event.key){
        case 'ArrowRight':
            dx = dx + 1
            break;
        case 'ArrowLeft':
            dx = dx - 1
            break; 
        case 'ArrowDown':
            dy = dy + 1
            break;
        case 'ArrowUp':
            dy = dy - 1
            break;    
    }
}
function kUp(event){
    switch(event.key){
        case 'ArrowRight':
            dx = 0
            break;
        case 'ArrowLeft':
            dx = 0
            break; 
        case 'ArrowDown':
            dy = 0
            break;
        case 'ArrowUp':
            dy = 0
            break;    
    }
}
function enterFrame(){
    obj.style.color = 'white'
    obj.innerHTML = "X= "+px+"<br>Y= "+py;
    px += dx*vel
    py += dy*vel
    obj.style.left = px+'px'
    obj.style.top =py+'px'
}
window.addEventListener('load', iniciar)