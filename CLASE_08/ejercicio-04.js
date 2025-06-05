/*Ejercicio 4: Determinar si un número es par o impar 
    1. Solicite al usuario que ingrese un número entero. 
    2. Determine si el número es par o impar. 
    3. Muestre un mensaje indicando si el número es par o impar. 
Requisitos: 
    • Utiliza el operador módulo (%) para comprobar si el número es divisible 
por 2. 
    • Usa una estructura if-else para mostrar el mensaje adecuado. */
    
console.log(`*******************************************************`);
console.log(`Ejercicio 4: Verificar si un número es part o impar `);
console.log(`*******************************************************`);

// Importamos prompt-sync
const prompt6 = require('prompt-sync')(); 

// Pedimos al usuario que ingrese el número
const input = prompt6("Ingresá un número entero: ");
// parseInt convierte el texto a número entero
const numIngresado = parseInt(input);

// Preguntamos si no es un numero, isNaN significa "is Not a Number"
if (isNaN(numIngresado)) {
    console.log('No es número válido');
} else { 
    if (numIngresado % 2 === 0){
        console.log(`El numero ingresado  ${numIngresado} es par`);
    }else{
        console.log(`El numero ingresado  ${numIngresado} es impar`);
    }
}
