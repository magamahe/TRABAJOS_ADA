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

