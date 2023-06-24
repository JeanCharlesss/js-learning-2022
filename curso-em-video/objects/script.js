// let amigo = {} // criando um objeto na variável
let amigo = {
    nome: 'Jean', // indice como nome com valor Jean
    sexo: 'M', // indice sexo com valor M
    peso: 75, // indice peso com valor 75
    engordar(p=0){ // indice com ma função que recebe o valor com a lógica dessa função
        this.peso += p
    }
}   

console.log(amigo) // mostrando o objeto do array completo
console.log(amigo.nome) // mostrando no objeto apenas o indice do nome, que contém Jean
amigo.engordar(3) // adicionando o valor na função engordar 
console.log(`${amigo.nome} pesa ${amigo.peso}Kg agora.`) // mostrando o peso atual depois de engordar engordar() 