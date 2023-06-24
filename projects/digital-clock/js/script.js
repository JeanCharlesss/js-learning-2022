        //adicionando o escutador, e executando o evento
        window.onload = relogio
        //setando a variavel pra pegar o body
        var corpo = window.document.getElementById('corpo')
        //setando a variavel pra pegar o dia
        var dia = window.document.getElementById('relogio')
        // setando as variaveis para pegar a hora
        var saudar = window.document.getElementById('saudar')
        var data = new Date()
        var hora = data.getHours()
         
        // usando a condição para fazer a saudação de acordo com a hora
        if (hora < 12) {
            saudar.innerHTML = ('Bom dia!')
        } else if (hora <= 18){
            saudar.innerHTML = ('Boa tarde!')
        } else {
            saudar.innerHTML = ('Boa noite!')
        }

        //setando na variavel a hora,os minutos e os segundos do sistema
        function relogio(){
            var data = new Date()
            var horas = data.getHours()
            var minutos = data.getMinutes()
            var segundos = data.getSeconds()

            // adicionando o 0 antes para números com 1 casa de digito(numeros antes do 10 [0,1,2,3,4,5,6,7,8,9])
            /*
                exemplo:
                2  <- output
                adiciona o 0 concatenando
                0+"horas"
                02 <-output 
            */
            if(horas < 10){
               horas = '0'+horas
            } else if(minutos < 10){
               minutos = '0'+minutos
            } else if(segundos < 10){
               segundos = '0'+segundos
            }

            //apresentando no label id "relogio" as horas, minutos e segundos concatenando 00:00:00
            window.document.getElementById('relogio').innerHTML = (`${horas}:${minutos}:${segundos}`)

            // chamando a função do relogio() a cada 1000 milisegundos, para que o relogio sempre esteja atualizando
            window.setInterval('relogio()', 1000)
        }