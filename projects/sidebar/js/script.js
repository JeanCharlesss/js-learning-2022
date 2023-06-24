const arrow = document.querySelector('.btn');
const container = document.querySelector('.container');

arrow.addEventListener('click', () => {
    container.classList.toggle('closed');
});