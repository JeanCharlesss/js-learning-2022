// ------ para apontar pra um formulário ------
// var fm = document.forms.length // pega a quantidade de forms
// var fm = document.forms[0].id // pegando o id do primeiro formulario
// var fm = document.forms.item(0).id // metodo item pra apontar um formulario
var fm = document.forms.namedItem('curso1').innerHTML // pegando todo o formulario do form
document.write(fm)
document.write('<br><hr>')

// ---- para apontar pra os elementos do formulario ----
var elementoFm = document.forms[0].elements[0].value
document.write('<br>'+elementoFm)
document.write('<br><hr>')

//pode trabalhar com os itens separados
var forms1 = document.forms[0]
var elForms1 = forms1.elements
elForms1[0].style.backgroundColor = "#ddd"
elForms1[0].value="JavaScript"
elForms1[1].style.backgroundColor = '#f00'
elForms1[1].value='232321'
