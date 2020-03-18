

const input = document.querySelector('.input')
const button = document.querySelector('.button');
const texto = document.querySelector('.texto');

const showAlert = () => {
    texto.innerHTML = 'Hola ' + input.value;
    }

button.addEventListener('click', showAlert);

