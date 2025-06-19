/* Solicita al usuario la cantidad de productos comprados y el precio unitario. 
Usa una función flecha para calcular el total con descuento según la 
cantidad. */

const prompt = require("prompt-sync")();

const cant = parseInt(prompt("Ingrese la cantidad de productos comprados:"));
const precios =[];

for(let i = 0; i < cant; i++){
    const ingresa_precio = parseFloat(prompt(`Ingrese el precio del producto ${i+1}:`));
    precios.push(ingresa_precio);
}

const funcion_descuento = (precios) =>{
    const total = precios.reduce((acc, val) => acc + val, 0);
    let descuento = 0;

    (precios.length > 10) ? descuento = 0.20 : descuento = 0.10;
    return total - (total * descuento);

};

const totalFinal= funcion_descuento(precios)
console.log(`El total es:  $${totalFinal.toFixed(2)}`);