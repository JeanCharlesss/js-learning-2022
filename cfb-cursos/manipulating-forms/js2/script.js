var forms1 = document.forms[0]
var elForms1 = forms1.elements

for(let i = 0; i < elForms1.length; i++){ // usando o for, pode se usar o estilo para todo os elementos de forma dinamica
    elForms1[i].style.backgroundColor = 'blue'
    elForms1[i].style.color = '#f00'
}
// neste caso, há somente 2 elemento