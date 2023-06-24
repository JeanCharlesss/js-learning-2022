// Constantes : se usa da mesma forma todas.. pag55
var pi = Math.PI // pi
document.write(pi.toFixed(2)) // toFixed para arrumar para 2 casas decimais

document.write('<hr><br>')
// Métodos 
var valor = 10.3
var mt = Math.ceil(valor) // arredonda para cima
document.write(mt+'<br>')

var n1 = 4
var mt2 = Math.pow(n1, 2) // elevando a dois o valor da variavel
document.write(mt2+'<br>')

var n2 = 9
var mt3 = Math.sqrt(n2) // raiz quadrada
document.write(mt3+'<br>')

document.write('<hr><br>')

// aleatorio
var numero = 10 // entre 0 e 10.
var aleatorio = Math.round(Math.random() * numero) // arredondando para inteiro um numero aleatorio entre 0 e 10
document.write(aleatorio)