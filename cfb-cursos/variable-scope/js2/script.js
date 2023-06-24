// uma forma de utilizar e modificar ambas
var nomeCor = 'Vermelho'
function cor(){
    var nomeCor = 'Azul'
    document.write(this.nomeCor+'<br>'+nomeCor) // this fará uma busca pelo nome da variavel RAIZ, a que esta fora deste escopo na função
}
cor()