function contador (min, max){ // o minimo é 0, enquanto 10 é o maximo, passado pelo parametro
    document.write(min+'<br>') // escreve o minimo
    if(min < max){ // enquanto minimo for menor que o maximo
        contador(++min, max) // chama a função fazendo um pré decremento
    } // se minimo não for menor que o maximo, a chamada é encerrada, saindo do loop
}
// chamando com o prametro min e max
contador (0,10)

document.write('<hr><br>')

//fatorial
var total = 1
function fatorial(n){
    if(n != 1){
        total = total * n
        document.write(total+"<BR>")
        fatorial (--n)
    }
}
//5x4x3x2x1
fatorial(5)

//obj girar
var obj = document.getElementById('quad')
var ang = 0
var anima
function gira(){
    obj.style.transform = `rotate(${ang}deg)`
    ang++
    if(ang > 360){
        ang = 0
    }
    anima = requestAnimationFrame(gira)
}
gira()