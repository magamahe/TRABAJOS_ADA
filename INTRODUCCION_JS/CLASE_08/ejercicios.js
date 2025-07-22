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

/*Ejercicio 4: Determinar si un número es par o impar 
    1. Solicite al usuario que ingrese un número entero. 
    2. Determine si el número es par o impar. 
    3. Muestre un mensaje indicando si el número es par o impar. 
Requisitos: 
    • Utiliza el operador módulo (%) para comprobar si el número es divisible 
por 2. 
    • Usa una estructura if-else para mostrar el mensaje adecuado. */
    
console.log(`*******************************************************`);
console.log(`Ejercicio 4: Verificar si un número es positivo, negativo o cero `);
console.log(`*******************************************************`);

// Importamos prompt-sync
const prompt6 = require('prompt-sync')(); 

// Pedimos al usuario que ingrese los números
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

/*Ejercicio 5: Saludo personalizado 
    1. Solicite al usuario que ingrese su nombre. 
    2. Muestre un saludo personalizado usando el nombre ingresado. 
Requisitos: 
    • Utiliza prompt() para recibir el nombre del usuario. 
    • Muestra un mensaje utilizando concatenación de cadenas.*/
console.log(`*******************************************************`);
console.log(`Ejercicio 5: Saludo personalizado, verifico que no sea vacio  `);
console.log(`*******************************************************`);

// Importamos prompt-sync
const prompt7 = require('prompt-sync')(); 

// Pedimos al usuario que ingrese su nombre
const persona = prompt7("Buen dia, Cual es tu nombre?");
// Validamos que no esté vacío
if (persona.trim() === "") {
    console.log("No ingresaste un nombre válido.");
} else {
    // Mostramos un saludo personalizado
    console.log(`Que agrado que estes aca, ${persona} , Te damos la bienvenida al curso de JS `);
}

/*-------------------------------------------*/
console.log(`*******************************************************`);
console.log(`Ejercicio 5: Saludo personalizado que el nombre tenga mas de 2 letras`);
console.log(`*******************************************************`);

// Importamos prompt-sync
const prompt8 = require('prompt-sync')();

// Pedimos al usuario que ingrese su nombre
const persona2 = prompt8("¿Cuál es tu nombre? ").trim();

// Validamos que el nombre tenga al menos 2 letras y no solo espacios
if (persona2.length < 2) {
    console.log("Por favor, ingresá un nombre con al menos 2 letras.");
} else {
    console.log(`¡Hola ${persona2}! Bienvenido/a al programa`);
}

console.log(`*******************************************************`);