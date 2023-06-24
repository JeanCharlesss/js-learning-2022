// ByTagName guarda os elementos em um vetor
var tagsP = document.getElementsByTagName('p') // variavel tagsP recebe todos os P da página

document.write(`${tagsP[0].innerHTML} <br>`)

// podemos também capturar somente algum p
var especificoP = document.getElementsByTagName('p')[2] // p de indice 2

document.write(`${especificoP.innerHTML}`) // apresentando o interior do html do P especificado acima
especificoP.style.color = 'red' // podemos fazer alterações normalmente 

document.write('<hr>')

for (var i= 0; i < tagsP.length; i++){
    document.write(tagsP[i].innerHTML+'<br>')
}