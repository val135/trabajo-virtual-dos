// elemento de HTML
const button = document.querySelector('.start');
const movies = document.querySelector('.movieList'); //Esto es el ul del HTML, que en JS se llama movies

const inception = 'Inception';
const theButterFlyEffect = 'The butterfly effect';
const eternalSunshineOfTheSM = 'Eternal sunshine of the spotless mind';
const blueVelvet = 'Blue velvet';
const split = 'Split';


//Esta es la función moviesF, diferente a la const movies
const moviesF = () => {
    movies.innerHTML =  //Aquí se pone la constante, la que se va a agregar la lista ul
    ` <li id="peli1"> ${inception} </li>
      <li id="peli2">${theButterFlyEffect}</li>
      <li id="peli3">${eternalSunshineOfTheSM}</li>
      <li id="peli4" >${blueVelvet}</li>
      <li id="peli5" >${split}</li>`;

    const movie1=document.querySelector('#peli1');
    const movie2=document.querySelector('#peli2');
    const movie3=document.querySelector('#peli3');
    const movie4=document.querySelector('#peli4');
    const movie5=document.querySelector('#peli4');

    movie1.addEventListener('click', first);
    movie2.addEventListener('click', second);
    movie3.addEventListener('click', third );
    movie4.addEventListener('click', fourth );
    movie5.addEventListener('click', fifth );
    
}

button.addEventListener('click', moviesF); // aquí van acción y nombre de la función
const first = () => {
    alert(`${inception}`); 
}
const second = () => {
      //alert(event.currentTarget);
      alert( `${theButterFlyEffect}`);
}
const third = () => {
    alert( `${beternalSunshineOfTheSM}`);
}
const fourth = () => {
      alert(`${blueVelvet}`);
}
const fifth = () => {
    alert (`${split}`)
}
