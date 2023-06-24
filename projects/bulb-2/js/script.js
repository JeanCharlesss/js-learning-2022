var turnOnOff = window.document.getElementById('turnOnOff')
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
function lampOnOff(){
    if (turnOnOff.textContent == 'Ligar'){
        lampOn()
        turnOnOff.textContent = ('Desligar')
    }else{
        lampOff()
        turnOnOff.textContent = ('Ligar')
    }
}

turnOnOff.addEventListener('click', lampOnOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBreak)