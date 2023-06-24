//definindo botoes de eventos
const turnOnOff = document.getElementById('onOff');
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
    turnOnOff.textContent = 'Quebrado';
    if(turnOnOff.classList.contains('btn-danger')){
        turnOnOff.classList.remove('btn-danger');
        turnOnOff.classList.add('btn-secondary');
    }else if(turnOnOff.classList.contains('btn-success')){
        turnOnOff.classList.remove('btn-success');
        turnOnOff.classList.add('btn-secondary');
    }
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
function trocar(){
    if(isQuebrada()){
        lamp.src = './img/desligada.jpg';
        turnOnOff.textContent = 'Ligar';
        turnOnOff.classList.remove('btn-secondary');
        turnOnOff.classList.add('btn-success');
    }
}

//definindo função liga ou desliga para somente um botão
function ligaDesliga(){
    if(turnOnOff.textContent == 'Ligar'){
        ligar();
        turnOnOff.classList.remove('btn-success');
        turnOnOff.classList.add('btn-danger');
        turnOnOff.textContent = 'Desligar';

    }else if(turnOnOff.textContent == 'Desligar'){
        desligar();
        turnOnOff.classList.remove('btn-danger');
        turnOnOff.classList.add('btn-success');
        turnOnOff.textContent = 'Ligar';
    }else if(turnOnOff.textContent == 'Quebrado'){
        alert('Troque de lâmpada, pois essa está quebrada.')
    }
}

//adicionando escutador de click para recarregar
reload.addEventListener('click', trocar);

//adicionando escutador de passagem de mouse para ligar
lamp.addEventListener('mouseover', ligar);
//adicionando escutador de saida de mouse para desligr
lamp.addEventListener('mouseleave', desligar);

//adicionando escutador de click para ligar ou desligar
turnOnOff.addEventListener('click', ligaDesliga);

//adicionando escutador de double click para quebrar
lamp.addEventListener('dblclick', quebrar);
