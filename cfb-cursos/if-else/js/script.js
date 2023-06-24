var nome = prompt('Digite seu nome')
var res = confirm(`${nome}, você deseja continuar?`)

if(res == true ){
    alert('Você entrou no bloco verdadeiro.')
}else{
    alert('Você entrou no bloco falso.')
}