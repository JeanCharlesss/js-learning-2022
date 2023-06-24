const body = document.getElementById('body'); // capturando o body do documento
txtColor = document.getElementById('color'); //capturando o texto

/* ----BTN-Actived---- */
const btn = document.getElementById('btn'); //capturando o botão do RGB
btn.addEventListener('click', () => {
    if(btn.classList.contains('rgb')){ // se for o btn rgb

        let r, g, b; // variaveis para RGB
        r = Math.floor(Math.random()*255); // R
        g = Math.floor(Math.random()*255); // G
        b = Math.floor(Math.random()*255); // B
    
        body.style.backgroundColor = `rgb(${r},${g},${b})`; // adicionando o background no body
    
        txtColor.textContent = `${r},${g},${b}`; // mudando o conteudo
        txtColor.style.color = `rgb(${r},${g},${b})`; // adicionando cor na fonte 

    }if(btn.classList.contains('hexa')){ // se for o btn hex

        const hexList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];

        let hexa = ''; // string que conterá o hexadecimal
        for(let i = 0 ; i < 6; i++){ //loop de 6 turno
            hexa += hexList[Math.floor(Math.random()*16)]; // cada turno sorteia algum numero do hexalist
        }
        body.style.backgroundColor = `#${hexa}`;
        
        txtColor.textContent = `${hexa}`;
        txtColor.style.color = `#${hexa}`;

    }

});

