//criando a mochila para guardar os itens
var mochila = new Array()

//criando os itens > nome do item e a quantidade
var item1=["Corda", 2]
var item2=["Faca", 1]
var item3=["Cura", 5]
var item4=["Pistola", 1]

mochila.push(item1)
mochila.push(item2)
mochila.push(item3)
mochila.push(item4)

//apresentando o nome do item e a sua quantidade
document.write(`${mochila[0][0]}: ${mochila[0][1]} quantidades.<br>`)
document.write(`${mochila[1][0]}: ${mochila[1][1]} quantidades.<br>`)
document.write(`${mochila[2][0]}: ${mochila[2][1]} quantidades.<br>`)
document.write(`${mochila[3][0]}: ${mochila[3][1]} quantidades.<br>`)
//obs: note que há dois indice, primeiro indice é a localização dentro da mochila, e depois o do item dentro da mochila.