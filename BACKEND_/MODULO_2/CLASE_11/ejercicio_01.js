// Ejercicio 1: Uso básico de readline-sync

// Importamos el módulo
const readlineSync = require('readline-sync');

// Pedimos los datos al usuario
const nombre = readlineSync.question('Ingresa tu nombre: ');
const edad = readlineSync.questionInt('Ingresa tu edad: ');

// Mostramos un saludo personalizado
console.log(`¡Hola ${nombre}! Tienes ${edad} años.`);
