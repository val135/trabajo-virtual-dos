// elemento de HTML

const text = document.querySelector('.parr');

text.addEventListener('mouseover' , ()=> {
    document.querySelector('div').innerHTML='<p class="parr">Why do we use it? It is a long established fact that a reader will be distracted by the readable conten</p>'
})

const showAlert = () => {
    text.innerHTML = 'Mi primer clic';
}

button.addEventListener('mouseover', showAlert);
