//capturando o botão do evento
btnCalcular = document.getElementById('calcular');
//adicionando um escutador do tipo Click
btnCalcular.addEventListener('click', calcularImc);

//função que irá calcular o imc
function calcularImc(){
    //string vinda diretamente dos valores dos campos
    var txtNome = document.getElementById('txtNome').value;
    var txtAltura = document.getElementById('txtAltura').value;
    var txtPeso = document.getElementById('txtPeso').value;

    //conversão para os calculos seguinte
    var altura = parseFloat(txtAltura);
    var peso = parseFloat(txtPeso);

    //calculo usando a fórmula do IMC (p/(a*a))
    var imc = peso / (altura*altura);

    //verificação simples sob campos vazios
    if(!txtNome.length == 0 && !txtAltura.length == 0 && !txtPeso.length == 0 ){

        //mensagem de classificação pelo IMC
        var aviso;
        if(imc < 18.5){
            aviso = "abaixo do peso";
        }else if(imc < 24.9){
            aviso = "peso ideal (parabéns!)";
        }else if(imc < 29.9){
            aviso = "levemente acima do peso";
        }else if(imc < 34.9){
            aviso = "obesidade grau I";
        }else if(imc < 39.9){
            aviso = "obesidade grau II (severa)";
        }else{
            aviso = "obesidade III (mórbida)";
        }
    
        //formatação de um número float para 1 casa decimal
        var txtImc = imc.toFixed(1);
        
        //imprimindo o resultado na div
        var area = document.getElementById('resultado');
        area.innerHTML = `
            Olá ${txtNome},<br>
            seu IMC é igual à <strong>${txtImc}</strong>. Portando você se classifica em: <br>
            ${aviso}
        `;
    }else{
        //caso algum campo vazio, alerte-o
        alert('Preencha todos os campos*');
    } 
}