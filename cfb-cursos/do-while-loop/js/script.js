var num = 10 // var representa o escopo global

document.write(num+' <br>')

if(num==10){
    let num = 5 // let representa o escopo local, sera usado apenas no bloco onde foi inicializadp
    document.write(num+' <br>')
}


document.write (num+' <br>')