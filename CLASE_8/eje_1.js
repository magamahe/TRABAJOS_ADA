/* Ejercicio 1: Calcula el doble de un número
    1. Solicite al usuario que ingrese un número cualquiera. 
    2. Calcule el doble de ese número. 
    3. Muestre el resultado en la consola. 
Requisitos: 
    • Utiliza la función prompt() para solicitar el dato al usuario. 
    • Almacena el número ingresado en una variable. 
    • Utiliza un operador aritmético para calcular el doble del número.*/

console.log(`*******************************************************`);
console.log(`Ejercicio 1: Calcula el doble de un número ingresado por teclado`);
console.log(`*******************************************************`);

/////////////////Sin pedir el ingreso del numero///////////////

console.log(`-------------Con un valor fijo sin ingresarlo------------------`);

let numero1 = 6;
let doble1 = numero1 * 2;
console.log(`El doble de ${numero1} es ${doble1}`);



///////////////Sin verificar si el numero ingresado es un numero/////////////
console.log(`--------Sin verificar si el numero ingresado es un numero-------`);

// Importamos prompt-sync
const prompt2 = require('prompt-sync')(); 

// Pedimos al usuario que ingrese un número
const numero2 = prompt2('Ingresá un número: ');

// Convertimos el texto a número y calculamos el doble
const doble2 = Number(numero2) * 2;

// Mostramos el resultado
console.log(`El doble de ${numero2} es ${doble2}`);


////////////////////Verificando si es un numero////////////////////////////////////

console.log(`--------Verificar si el numero ingresado es un numero-------`);

// Importamos prompt-sync
const prompt3 = require('prompt-sync')(); 

// Pedimos al usuario que ingrese un número
const numero3 = prompt3('Ingresá un número: ');

// Preguntamos si no es un numero, isNaN significa "is Not a Number"
if (isNaN(numero3)) {
    console.log('Eso no es un número válido.');
}else{ 
    // Convertimos el texto a número y calculamos el doble
    const doble3 = Number(numero3) * 2;
    // Mostramos el resultado
    console.log(`El doble de ${numero3} es ${doble3}`);
}