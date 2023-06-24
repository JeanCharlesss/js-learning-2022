var turnOn = window.document.getElementById('turnOn')
var turnOff = window.document.getElementById('turnOff')
var lamp = window.document.getElementById('lamp')

function IsLampBroken(){
    return lamp.src.indexOf('quebrada') > -1
}
function lampOn(){
    if(!IsLampBroken()){
        lamp.src = ('./img/ligada.jpg')
    }
}
function lampOff(){
    if(!IsLampBroken()){
    lamp.src = ('./img/desligada.jpg')
    }
}
function lampBreak(){
    lamp.src = ('./img/quebrada.jpg')
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBreak)