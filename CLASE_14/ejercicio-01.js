/*  Ejercicio 1: Calcular el precio final con IVA 
Solicita al usuario el precio de un producto y el porcentaje de IVA. Usa una 
función flecha para calcular el precio final.  */

const prompt = require('prompt-sync')(); 

const precio = parseFloat(prompt('Ingresar precio del producto: '));
const iva = parseFloat(prompt('Ingresar % de IVA: '));

const calcular_precio_total = (precio, iva) => precio + (precio * iva / 100)

let precio_final = calcular_precio_total(precio, iva)
    
console.log(`El precio final con iva es : $ ${precio_final.toFixed(2)}`);

