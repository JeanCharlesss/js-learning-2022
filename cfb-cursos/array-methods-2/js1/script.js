var mochila = []

mochila.push('faca')
mochila.push('corda') 
mochila.push('pederneira') 
mochila.push('chave')
mochila.push('lanterna')
mochila.unshift('pedra')

document.write(mochila.indexOf('lanterna')) // indexOf trás a posição do item encontrado
//senão for encontrado, retorna -1
//então
pos = mochila.indexOf('Arame')
 if(pos == -1){
    document.write('Item não encontrado na mochila')
 }else{
    document.write('Item encontrado')
 }
