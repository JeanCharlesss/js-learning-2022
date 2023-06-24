// tabela de expressão match

var texto = document.getElementById('txt').innerHTML

var res = texto.match(/Jean/ig) // se caso não for encontrado o retorno será NULL

document.write(res.length+'<BR>') // pode se usar o lenght para ver quantos resultdo o metodo achou

//(/string/ig) => usando este parametro o javascript ignora o case sensivity
// usando o array podemos fazr uma varredura de todas as strings achada
document.write(res[0]+'<br>') // Jean com J maiusculo
document.write(res[1]+'<br>') // jean com j minusculo

document.write('<hr><br>')

//varredura por letras
var res=texto.match(/[^oa]/ig) // em formato de array pesquisando a letra e o

document.write(res.length+'<br>')
document.write(res)

document.write('<hr><br>')

var res=texto.match(/[*oa]/ig) // todas as letras, menos o e a

document.write('<hr><br>')

var res=texto.match(/[^a-g]/ig) // busca entre o A e o G