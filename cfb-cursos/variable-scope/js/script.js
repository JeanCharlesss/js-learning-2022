var nomeCor = 'Vermelho' // este escopo é fora do escopo da função abaixo
function cor(){
    var nomeCor = 'Azul' // escopo limitado onde foi declarado, dentro da função
    document.write(nomeCor+'<br>')
}
cor()
document.write(nomeCor+'<br>') // esta impressão é da variavel nomeCor do escopo fora da Função

document.write('<hr><br>')
var nomeCor2 = 'Azul' // este escopo é fora do escopo da função abaixo
function cor2(){
    nomeCor2 = 'Azul' // utizilando a variavel do escopo global
    document.write(nomeCor2+'<br>') // imprime
}
cor2()
document.write(nomeCor2+'<br>') // a mesma variavel foi modificada

