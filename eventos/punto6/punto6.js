'use strict';

const body = document.querySelector('.body');
let letter;


body.addEventListener('keydown',(event) => {
    letter = event.keyCode;  
    console.log(letter);

    if ( letter == 82){
        body.classList.add('red');
        body.classList.remove('purple');
    }
    else if(letter == 77){
        body.classList.add('purple');
        body.classList.remove('red');
    }
})