var horaSistema = new Date()
var hora = horaSistema.getHours()
if (hora > 6){
    console.log(`Você deveria ir dormir! Horário atual ${hora} horas`)
}else if (hora >= 6 && hora < 12){
    console.log(`Bom dia! Horário atual: ${hora} horas`)
}else if (hora >= 12 && hora < 18){
    console.log(`Boa tarde! Horário atual: ${hora} horas`)
}else {
    console.log(`Boa noite! Horário atual: ${hora} horas`)
}