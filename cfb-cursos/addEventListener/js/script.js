function msg(){
    var obj = document.getElementById('dv1')
    obj.style.backgroundColor = '#f00'
}
function eventoLoad(){
    alert('chamando a função quando carrega a página')
}
function cor1(){
    var obj = document.getElementById('dv1')
    obj.style.backgroundColor = 'orange'
}
function cor2(){
    var obj = document.getElementById('dv1')
    obj.style.backgroundColor = 'blue'
}
function eventos(){
    var obj = document.getElementById('dv1')
    obj.addEventListener('click', msg)
    obj.addEventListener('mouseover', cor1)
    obj.addEventListener('mouseout',cor2)
}

document.getElementById('dv1').addEventListener('click', msg)
window.addEventListener('load',eventos)