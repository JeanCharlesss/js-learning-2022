var item = ['faca', 'corda', 'perdeneira', 'lanterna', 'chave'] // por exemplo os itens totais 
var mochila = [] // mochila vazia

mochila.push(item[1]) // adicionando a corda na mochila, no indice 0 pois estava vazia
mochila.push(item[0]) 
mochila.push(item[4]) 

document.write(`${mochila[0]}, ${mochila[1]}, ${mochila[2]}`)
