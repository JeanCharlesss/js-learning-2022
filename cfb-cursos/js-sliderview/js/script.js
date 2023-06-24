//slides
var img = document.getElementById('img')
function slide1(){
    img.src = ('./img/s1.jpeg')
    setTimeout('slide2()', 2000)
}
function slide2(){
    img.src = ('./img/s2.jpg')
    setTimeout('slide3()', 2000)
}
function slide3(){
    img.src = ('./img/s3.jpg')
    setTimeout('slide4()', 2000)
}
function slide4(){
    img.src = ('./img/s4.png')
    setTimeout('slide1()', 2000)
}

window.addEventListener('load',slide1)