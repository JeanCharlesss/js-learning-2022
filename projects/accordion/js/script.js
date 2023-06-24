const section = document.querySelectorAll('.title');

for(let i = 0; i < section.length; i++){
    section[i].addEventListener('click', (e) => {

        let father = section[i].parentElement;
        let content = section[i].lastElementChild.classList.toggle('hide');
        let icon = section[i].lastElementChild;

        if(content == true){
            father.lastElementChild.className = 'show';
            icon.style.transform = 'rotate('+90+'deg)';
        }else{
            father.lastElementChild.className = 'hide';
            icon.style.transform = 'rotate('+0+'deg)';
        }

    });
}