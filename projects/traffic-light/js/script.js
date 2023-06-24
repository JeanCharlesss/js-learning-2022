// Capturando a img
var img = document.getElementById('img')
// Capturando os buttons
var red = document.getElementById('red')
var yellow = document.getElementById('yellow')
var green = document.getElementById('green')
var automatic = document.getElementById('automatic')

// Adicionando os escutadores e as funções
red.addEventListener('click', function teste(){
    clearInterval(stopped)    
    img.src = './img/1.png'
})

yellow.addEventListener('click',function yellow(){
    clearInterval(stopped)
    img.src = './img/2.png'

})

green.addEventListener('click', function green(){
    clearInterval(stopped)
    isClicado = false
    img.src = './img/3.png'

})

var stopped
function automatico(){
    var i = 1
    stopped = setInterval(function(){
    img.src = `./img/${i}.png`
    i++
    if(i > 3){
        i = 1
    }
}, 1000)
}

automatic.addEventListener('click', automatico)


