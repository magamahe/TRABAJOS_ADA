/* Ejercicio 3:  Suma de dos números ingresados por el usuario  
    1. Pida al usuario que ingrese dos números. 
    2. Sume ambos números. 
    3. Muestre el resultado de la suma. 
Requisitos: 
    • Utiliza prompt() para recibir los números. 
    • Utiliza parseFloat() para convertir las entradas a números. 
    • Almacena los resultados en variables adecuadas y muestra el resultado.*/

console.log(`*******************************************************`);
console.log(`Ejercicio 3:  Suma de dos números ingresados por el usuario `);
console.log(`*******************************************************`);

// Importamos prompt-sync
const prompt5 = require('prompt-sync')(); 

// Pedimos al usuario que ingrese los números
const input1 = prompt5("Ingresá el primer número: ");
const input2 = prompt5("Ingresá el segundo número: ");

const num1 = parseFloat(input1);
const num2 = parseFloat(input2);

// Preguntamos si no es un numero, isNaN significa "is Not a Number"
if (isNaN(num1) || isNaN(num2)) {
    console.log('Uno o ambos valores no son números válidos');
} else { 
    const rdo = num1 + num2;
     console.log(`la suma de  ${num1} y ${num2}  es ${rdo}`);
}
