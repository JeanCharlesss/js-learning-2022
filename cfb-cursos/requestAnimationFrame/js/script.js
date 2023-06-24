// inicializando as variaveis
var jog = document.getElementById('jogador')
var vel = 5
var dx = 1
var dy = 0
var px = 0
var py = 0
var anima
var ini = document.getElementById('iniciar')
var par = document.getElementById('parar')
var isClicado = false // variavel para avaliar o estado, se esta ativo ou não, inicialmente é falso, pois não esta clicado
function parar(){
    cancelAnimationFrame(anima) // cancelando a animação
    isClicado = false // clicado recebe false, pois esta parado ou seja não clicado
}
function iniciar(){
    if (isClicado == false){ // se clicado for falso (se a animação não otiver executando)
        game() // então executa a animação, para iniciar
        isClicado = true // mas, deve mudar o estado do botão, agora clicado esta verdadeiro
    }else if(isClicado == true){ // se clicado for verdadeiro, então não executa nada

    }
}
function clickIniciar(){
    if (isClicado == false){
        game() 
        isClicado = true
    }else if(isClicado == true){ 

    }
}
function game(){
    px += (dx*vel)
    //py = py + (dy*vel)
    jog.style.left = px +'px'
    //jog.style.top = py +'px'
    anima = requestAnimationFrame(game)
    if (px > 800){
        dx = -1
    }else if(px < 0){
        dx = 1
    }
}
jog.addEventListener('click',clickIniciar)
par.addEventListener('click',parar)
ini.addEventListener('click', iniciar)