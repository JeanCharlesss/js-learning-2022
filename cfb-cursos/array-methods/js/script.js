// adicionando com o Push
var mochila = []

mochila.push('faca')
mochila.push('corda') 
mochila.push('pederneira') 
mochila.push('chave')
mochila.push('lanterna')
mochila.unshift('pedra') // unshift, será adicionando no primeiro indice [0]

mochila.pop() // pop remove o ultimo do indice
mochila.shift() // shift remove do inicio 
mochila.splice(2, 1) // splice remove no meio do array (apartir do 2, remove 1)

document.write(mochila[0]+' <br>')
document.write(mochila[1]+' <br>')
document.write(mochila[2]+' <br>')
document.write(mochila[3]+' <br>')
document.write(mochila[4]+' <br>')
document.write(mochila[5]+' <br>')