//  como começar a contabilizar apartir de uma data em especiico?
document.write(Date()+ '<br>') 
document.write(`<hr><br>`)
var data = new Date() 
var novaData = new Date(1978,2,10,10,10) // parametros > ano, mes, dia, hora, minuts, segunos,milissegundos

novaData.setDate(data.getDate()+0) 


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

