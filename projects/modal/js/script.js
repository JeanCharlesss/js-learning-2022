const modal = document.querySelector('.modal-container');

const btnOpen = document.querySelector('.btnOpen');
const btnOk = document.querySelector('.btnOk');
const btnCancel = document.querySelector('.btnCancel');

btnOpen.addEventListener('click', openModal);
btnOk.addEventListener('click', closeModal);
btnCancel.addEventListener('click', closeModal);

function openModal(){
    modal.classList.add('active');
}

function closeModal(){
    modal.classList.remove('active');
}

