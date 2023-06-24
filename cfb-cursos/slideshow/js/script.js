var i = 1
setInterval(function(){
    document.getElementById('slide'+i).checked = true
    i++
    if(i > 5){
        i = 1
    }
}, 3000)