/* Ejercicio 7: Calculadora simple
Consigna:
Crea un programa que le pida al usuario dos números y una operación matemática a realizar: suma, resta, multiplicación o división. Según la operación ingresada, el programa deberá calcular y mostrar el resultado. Si el usuario ingresa una operación inválida, el programa debe mostrar un mensaje de error. Usa switch para resolverlo.
 */

const prompt = require("prompt-sync")(); 

let numero1 = parseFloat(prompt("Ingresa el primer número: "));
let numero2 = parseFloat(prompt("Ingresa el segundo número: "));

// Valida que los números ingresados sean válidos
if (isNaN(numero1) || isNaN(numero2)) {
    console.log("Error: Por favor, ingresa números válidos."); 
    return; // Termina la ejecución del programa si los números no son válidos
}
console.log(`Has ingresado los números: ${numero1} y ${numero2}`); // Muestra los números ingresados

// Pide al usuario que ingrese la operación a realizar  
let operacion = prompt("Ingresa la operación a realizar (suma, resta, multiplicacion, division): ").toLowerCase();  
// Variable para almacenar el resultado
let resultado;      


// Estructura switch para determinar la operación a realizar
switch (operacion) {
    case "suma":
        resultado = numero1 + numero2; // Suma los dos números
        console.log(`El resultado de la suma es: ${resultado}`); // Muestra el resultado
        break;
    case "resta":
        resultado = numero1 - numero2; // Resta el segundo número al primero
        console.log(`El resultado de la resta es: ${resultado}`); // Muestra el resultado
        break;
    case "multiplicacion":
        resultado = numero1 * numero2; // Multiplica los dos números
        console.log(`El resultado de la multiplicación es: ${resultado}`); // Muestra el resultado
        break;
    case "division":
        if (numero2 !== 0) { // Verifica que no se divida por cero
            resultado = numero1 / numero2; // Divide el primer número por el segundo
            console.log(`El resultado de la división es: ${resultado}`); // Muestra el resultado
        } else {
            console.log("Error: No se puede dividir por cero."); // Mensaje de error si se intenta dividir por cero
        }
        break;
    default:
        console.log("Operación inválida. Por favor, ingresa una operación válida."); // Mensaje de error si la operación no es válida
}   