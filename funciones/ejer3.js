'use strict';


let precio = 1200;
const IVA=0.21;
let total;

function calcularTotal (P,I,T){
    T=(P*0.21)+P;
    return ('Precio sin IVA: ' + P + ' con IVA: ' + I  + ' Total: ' + T);
}

calcularTotal(precio,IVA,total);