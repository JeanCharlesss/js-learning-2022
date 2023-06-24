const addressForm = document.querySelector('#address-form');
const cepInput = document.querySelector('#cep');
const addressInput = document.querySelector('#address');
const cityInput = document.querySelector('#city');
const neighborhoodInput = document.querySelector('#neighborhood');;
const regioInput = document.querySelector('#region');
const formInputs = document.querySelectorAll('[data-input]');
const fadeElement = document.querySelector('#fade');

const closeButton = document.querySelector('#close-message');

// validate CEP input
cepInput.addEventListener('keypress', (e)=>{
    const onlyNumbers = /[0-9]/ // regex

    //converting to key
    const key = String.fromCharCode(e.keyCode);

    //validate to get only numbers
    if(!onlyNumbers.test(key)){
        e.preventDefault(); // stop act
        return; // leave of function
    }
});

// get address
cepInput.addEventListener('keyup', (e)=>{

    const inputValue = e.target.value;

    // verifying if we have lenght equal 8 
    if(inputValue.length === 8){
        getAddress(inputValue);
    }
});

// Getting from API
async function getAddress(cep){
    toggleLoader(); // calling loader

    cepInput.blur(); // removing selecting

    const apiUrl = `https://viacep.com.br/ws/${cep}/json/`;

    const response = await fetch(apiUrl); // getting res of api

    const data = await response.json(); // converting to JSON

    console.log(data);
    // checking error from api
    if(data.erro === true){
        //forcing user to put right cep
        if(!addressInput.hasAttribute('disabled')){
            toggleDisable();
        }
        //cleaning form
        addressForm.reset();
        toggleLoader();

        //showing message
        toggleMessage('CEP inválido! Tente novamente.');
        return;
    }

    if(addressInput.value === ''){
        // removing disabled 
        toggleDisable();
    }
    //adding values in our inputs
    addressInput.value = data.logradouro;
    cityInput.value = data.localidade;
    neighborhoodInput.value = data.bairro;
    regioInput.value = data.uf;

    //removing loader
    toggleLoader()
}

// showing or hidding loader
function toggleLoader(){
    const loaderElement = document.querySelector('#loader');

    fadeElement.classList.toggle('hide');
    loaderElement.classList.toggle('hide');
}

// showing or hidding message
function toggleMessage(msg){
    const messageElement = document.querySelector('#message');
    const messageElementText = document.querySelector('#message p');

    messageElementText.innerHTML = msg;

    fadeElement.classList.toggle('hide');
    messageElement.classList.toggle('hide');
}

// showing or removing disable attribute
function toggleDisable(){
    //removing
    if(regioInput.hasAttribute('disabled')){
        formInputs.forEach((input)=>{
            input.removeAttribute('disabled');
        });
    }else{
        formInputs.forEach((input)=>{
            input.setAttribute('disabled', 'disabled')
        });
    }
}
//close-message 
closeButton.addEventListener('click', ()=>{
    toggleMessage();
})

//fake save address
addressForm.addEventListener('submit', (e)=>{
    e.preventDefault(); // topping submit for real

    toggleLoader(); //add loading

    setTimeout(()=>{
        toggleLoader();
        toggleMessage('Endereço salvo com sucesso!');
        addressForm.reset();
        toggleDisable();
    }, 1500); // 1.5s to stop load, send message, reset form and put disabled attribute
})