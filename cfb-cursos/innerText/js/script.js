var cxt = document.getElementById('cxtexto').value = 'JavaScript' // Mudando o valor, modificando uma propriedde do html e adicionando em uma variavel
var pxt = document.getElementById('texto') // primeiro pegando o ELEMENTO
// mostrando o ELEMENTO
alert(pxt) 

// também é possivel mudar o texto, O VALOR do p, usando o innerHTML
pxt.innerHTML = 'Mudando o "valor" do p'

var div = document.getElementById('dv')
div.innerHTML = ('Novo texto da div') // inner muda o texto dentro da tag html