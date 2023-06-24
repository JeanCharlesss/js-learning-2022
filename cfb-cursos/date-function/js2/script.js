// como configurar da data? incrementar ou decrementar?
document.write(Date()+ '<br>') 
document.write(`<hr><br>`)
var data = new Date() 
var novaData = new Date() // capturando uma nova Date()

novaData.setDate(data.getDate()+0) //setando um date com o date anterior somando +2

// logo, todos posteriores devem obter a novaData que foi setada
var diasem = novaData.getDay()
var dia = novaData.getDate() 
var mes = novaData.getMonth() 
var ano = novaData.getFullYear() 

var meses = new Array('Janeiro', 'Fevereiro','Março','Abril','Maio', 'Junho',
                      'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')


var semanas = new Array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira',
                        'Sexta-feira','Sabado')


document.write(`${semanas[diasem]}, ${dia} de ${meses[mes]} de ${ano} <br>`)

var hora = novaData.getHours() 
var minutos = novaData.getMinutes()
var segundos = novaData.getSeconds() 

document.write(`${hora}:${minutos}:${segundos}`)


// se quiser aumentar ou diminuir é somente mudar na linha 7.. 2+,3+,4+...
// obs: serve para qualquer, getDate, getMonth, getFullYear etc.