//capturando o elemento img
const img = document.getElementById('imagem');

//capturando o grupo de botões
const groupButtons = document.getElementById('buttons');

//variaveis globais
let corIndex = 0; //index de cor
let idInterval = null; //id global do intervalo

//objeto que contém uma função em cada indice 
const ligar = {

    'vermelho': () => {
        img.src = './img/vermelho.png';
    },
    'amarelo': () => {
        img.src = './img/amarelo.png';
    },
    'verde': () => {
        img.src = './img/verde.png';
    },
    'auto': () => {
        idInterval = setInterval(mudarCor, 1000);
    }
    
}

//função para pular o index, fazendo com que mude a cor
const skipIndex = () =>{
    if(corIndex< 2 ){
        corIndex++;
    }else{
        corIndex = 0;
    }
}

//função para limpar o ID do intervalo
const pararAuto = () => {
    clearInterval (idInterval);
} 

//função que muda cor
const mudarCor = () => {
    const cores = ['vermelho','amarelo','verde']; //objeto com as cores [0,1,2]
    const cor = cores[corIndex]; //  pegando a cor pelo index através da variável global 
    ligar[cor](); // chamando a função para mudar o source
    skipIndex(); // chamando a função de pular para o próximo index
}

//função que obtem o tipo de evento acionado
const semaforo = (event) => {
    pararAuto(); //função para parar a ação automatica se existir
    ligar[event.target.id](); // capturando o id através do alvo e passando como 
    // parametro para a função ligar, que irá acionar uma função
}

//adicionando um evento de click caso algum dos botões do grupo de botões for ativado
groupButtons.addEventListener('click', semaforo);