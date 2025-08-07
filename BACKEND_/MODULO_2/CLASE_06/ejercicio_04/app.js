/* Requisitos del programa:
1. Usa una variable de entorno llamada START_MESSAGE para configurar el saludo inicial.
2. Usa readline para preguntar el nombre del usuario.
3. Despídete del usuario con un mensaje personalizado. */

// Carga las variables de entorno
require('dotenv').config(); 
const readline = require('readline');

// Obtiene el saludo desde la variable de entorno
const saludo = process.env.START_MESSAGE || "Bienvenido al programa ";
const saludo2 = process.env.END_MESSAGE || "Gracias, hasta luego ";
console.log(saludo);

// 1. Creamos la interfaz de lectura desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Preguntamos el primer número
rl.question('Buen día, me podrias decir como es tu nombre? ', (nombre) => {
    console.log(`${saludo2}, ${nombre}!`);
    // 6. Cerramos la interfaz
    rl.close();
});


// Manejamos el evento de cierre para finalizar el programa.
rl.on('close', () => {
    process.exit(0);
});
