/* Ejercicio 2:  Verificar si un número es positivo, negativo o cero 
    1. Pida al usuario que ingrese un número. 
    2. Verifique si el número es positivo, negativo o igual a cero. 
    3. Muestre un mensaje indicando cuál es el caso. 
Requisitos: 
    • Utiliza una estructura de control de flujo (if, else if, else) para hacer las 
verificaciones. 
    • Usa parseFloat() para convertir la entrada del usuario a un número. */

console.log(`*******************************************************`);
console.log(`Ejercicio 2: Verificar si un número es positivo, negativo o cero `);
console.log(`*******************************************************`);

// Importamos prompt-sync
const prompt4 = require('prompt-sync')(); 

// Pedimos al usuario que ingrese un número
const numero4 = prompt4('Ingresá un número: ');

// Preguntamos si no es un numero, isNaN significa "is Not a Number"
if (isNaN(numero4)) {
    console.log('Eso no es un número válido.');
} else { 
    if(numero4 < 0){
        // Mostramos el resultado
        console.log(`El numero ingresado ${numero4} es negativo`);
    }else if(numero4 == 0){
        // Mostramos el resultado
        console.log(`El numero ingresado ${numero4} es cero`);
    }else{
        // Mostramos el resultado
        console.log(`El numero ingresado ${numero4} es positivo`);}
}