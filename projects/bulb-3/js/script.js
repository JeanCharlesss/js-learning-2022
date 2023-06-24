//definindo botoes de eventos
const turnOn = document.getElementById('ligar');
const turnOff = document.getElementById('desligar');
const reload = document.getElementById('recarregar');

//capturando a imagem padrão para alterar
const lamp = document.getElementById('lamp');

//função para ligar caso nao esteja quebrada
function ligar(){
    if(!isQuebrada()){
        lamp.src = './img/ligada.jpg';
    }
}

//função para desligar caso nao esteja quebrada
function desligar(){
    if(!isQuebrada()){
        lamp.src = './img/desligada.jpg';
    }
}

//função quebrar caso o evento double click seja efetuado
function quebrar(){
    lamp.src = './img/quebrada.jpg';
}

//função para verificar se está quebrada
function isQuebrada(){
    if(lamp.src.indexOf('quebrada') > -1){
        return true;
    }else{
        return false;
    }
}

//função para recarregar a lampada caso esteja quebrada
function recarregar(){
    if(isQuebrada()){
        lamp.src = './img/desligada.jpg';
    }
}

//adicionando escutador de click para recarregar
reload.addEventListener('click', recarregar);

//adicionando escutador de passagem de mouse para ligar
lamp.addEventListener('mouseover', ligar);
//adicionando escutador de saida de mouse para desligr
lamp.addEventListener('mouseleave', desligar);

//adicionando escutador de click para ligar 
turnOn.addEventListener('click', ligar);
//adicionando escutador de click para desligar
turnOff.addEventListener('click', desligar);

//adicionando escutador de double click para quebrar
lamp.addEventListener('dblclick', quebrar);
