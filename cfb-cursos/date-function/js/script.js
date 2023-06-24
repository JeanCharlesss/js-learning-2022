document.write(Date()+ '<br>') // resulta na data completa
document.write(`<hr><br>`)
var data = new Date() // pegando o objeto

var diasem = data.getDay()
var dia = data.getDate() // pegando o dia
var mes = data.getMonth() // pegando o numero do mes
var ano = data.getFullYear() // pegando o ano

// adicionando em um array todos os meses
var meses = new Array('Janeiro', 'Fevereiro','Março','Abril','Maio', 'Junho',
                      'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro')

// adicionando em um array todos os dias
var semanas = new Array('Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira',
                        'Sexta-feira','Sabado')

// apresentando a data por extenso
document.write(`${semanas[diasem]}, ${dia} de ${meses[mes]} de ${ano} <br>`)

var hora = data.getHours() // pegando a hora
var minutos = data.getMinutes() // pegando o minuto
var segundos = data.getSeconds() // pegando o segundos

document.write(`${hora}:${minutos}:${segundos}`)