// elemento de HTML
const button = document.querySelector('.bott');
const text = document.querySelector('.saludo');

const showAlert = () => {
    text.innerHTML = 'Mi primer clic';
}

button.addEventListener('click', showAlert);
