document.addEventListener('keydown',function(event){
    var img = document.getElementById('carro')
    var floor = document.getElementById('surface1')
    switch(event.key){
        case 'r':
            img.src = `./img/Img_05.png`
            break
        case 's':
            img.src = `./img/Img_06.png`
            break
    }
})