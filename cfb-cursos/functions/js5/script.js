//passando aray como parametro
var numeros = new Array(10,2,5,30,25,19,20,50,40,150)
function media(nums){
    var tam = nums.length
    var soma = 0
    for(var i=0; i<tam; i++){
        soma+=nums[i]
    }
    return Math.round(soma/tam)
}

document.write(media(numeros)) // passando o array que foi criado como parametro

// dessa forma é possivel adicionando infinitos valores como parametros, dentro do array