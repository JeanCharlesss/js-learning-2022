var ps = document.querySelectorAll('p') // capturando todos os P

document.write(ps[0].innerHTML+' <br>')
ps[0].style.color = 'red'

document.write('<hr>')

var titulo = document.querySelectorAll('.titulo')
for (var i = 0; i < titulo.length ; i++){
    document.write(titulo[i].innerHTML+' <br>')
}
