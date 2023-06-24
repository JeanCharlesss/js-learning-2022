var button = window.document.getElementById('verificar')
function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let nasc = window.document.getElementById('nasc').value
    let resultado = window.document.getElementById('resultado')
    if (nasc == 0 || nasc > ano){
        window.alert('Preencha todos os campos*')
    }else{
        let idade = ano - nasc
        let sexo = window.document.getElementsByName('sexo')
        let genero = ''
        let img = window.document.getElementById('img')
        if (sexo[0].checked){
            genero = 'masculino'
            if (idade >= 0 && idade < 3){
                img.src = ('./img/masc1.png')
            }else if (idade < 11){
                img.src = ('./img/masc2.png')
            }else if (idade < 17){
                img.src = ('./img/masc3.png')
            }else if(idade < 23){
                img.src = ('./img/masc4.png')
            }else if(idade < 51){
                img.src = ('./img/masc5.png')
            }else {
                img.src = ('./img/masc6.png')
            }
        }else if (sexo[1].checked){
            genero = 'feminino'
            if (idade >= 0 && idade < 3){
                img.src = ('./img/fem1.png')
            }else if (idade < 11){
                img.src = ('./img/fem2.png')
            }else if (idade < 17){
                img.src = ('./img/fem3.png')
            }else if(idade < 23){
                img.src = ('./img/fem4.png')
            }else if(idade < 51){
                img.src = ('./img/fem5.png')
            }else {
                img.src = ('./img/fem6.png')
            }
        }else {
            genero = 'indefinido'
            img.src = ('./img/indefinido.png')
        }
        resultado.innerHTML = (`Detectamos uma pessoa do genero ${genero} com ${idade} anos`)
    }
}
button.addEventListener('click', verificar)