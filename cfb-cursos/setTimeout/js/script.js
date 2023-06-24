var tmp;

function mudaCor(){
    var obj=document.getElementById('dv1')
    var r = Math.floor(Math.random()*255)
    var g = Math.floor(Math.random()*255)
    var b = Math.floor(Math.random()*255)
    obj.style.backgroundColor = `rgb(${r},${g},${b})`
}
function iniciar(){
    tmp = setInterval(mudaCor, 500) // setInterval chama a função a cada 1s
}

function parar(){
    clearInterval(tmp)
}

document.getElementById('bt1').addEventListener('click',iniciar)
document.getElementById('bt2').addEventListener('click',parar)