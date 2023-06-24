const txt = document.getElementById('txt'); //capturando o texto 

const btnGroup = document.getElementById('btn-group'); // capturando o grupo de botões

var count = 0; // variavel global do contador

btnGroup.addEventListener('click', (e) => { // adicionando o escutador atraves do click passando as informações do evento
    
    let btn = e.target; //pegando o alvo do botão clicado

    //varificando qual botão clicado
    if(btn.classList.contains('reset')){ // se reset, torna-se 0
        count = 0;
        txt.textContent = count;
    }else if(btn.classList.contains('increase')){ //se increase, aumenta-se 1
        count += 1;
        txt.textContent = count;
    }else if(btn.classList.contains('decrease')){ // se decrease, diminui-se 1;
        count -= 1;
        txt.textContent = count;
    }

    //veriricando qual o estado do contador para atribuir uma cor
    if(count == 0 ){
        txt.style.color = '#ffffff';
    }else if(count > 0){
        txt.style.color = '#00ff00';
    }else if(count < 1){
        txt.style.color = '#ff0000';
    }
});