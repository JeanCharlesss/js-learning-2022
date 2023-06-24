// dados de review local
const review = [
    {
        id: 1,
        name: 'Susan Smith',
        job: 'Web Developer',
        img: './img/person-0.png',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit porro tenetur praesentium quo. Totam laudantium aperiam quidem quod nulla?'
    },
    {
        id: 2,
        name: 'Ana Ritt',
        job: 'Devops',
        img: './img/person-1.png',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit porro tenetur praesentium quo. Totam laudantium aperiam quidem quod nulla?'
    },
    {
        id: 3,
        name: 'Carol Arch',
        job: 'UI Designer',
        img: './img/person-2.png',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit porro tenetur praesentium quo. Totam laudantium aperiam quidem quod nulla?'
    },
    {
        id: 4,
        name: 'Liza Hans',
        job: 'Scrum Master ',
        img: './img/person-3.png',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugit porro tenetur praesentium quo. Totam laudantium aperiam quidem quod nulla?'
    },
    
];

// selecionar os items
const img = document.getElementById('image'); //img
const author = document.getElementById('name'); // nome
const job = document.getElementById('job'); // skill
const desc = document.getElementById('desc'); // descrição

// selecionando os btns
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// index iniciado
var index = 0;

window.addEventListener('DOMContentLoaded', () =>{ // item inicial
    showPerson();
});

function showPerson(){
    const item = review[index];
    img.src = item.img;
    author.textContent = item.name; 
    job.textContent = item.job;
    desc.textContent = item.desc;
}

// passar pra o próximo review
next.addEventListener('click', () =>{
    index++; // adicionando um index
    if(index > review.length - 1){ // verificando se o index é maior que a quantidade de items
        index = 0; // se sim, volta para o index 0
    }
    showPerson(); // passando o index por parametro
});

// passar para o review anterior
prev.addEventListener('click', () => {
    index--; //diminuindo um index
    if(index < 0){ // verificando se é menor que 0
        index = review.length - 1; // se sim, então o index recebe a quantidade de aray menos 1
    }
    showPerson(index); // passando o index por parametro
});