/* Requisitos del programa:
1. Usa una variable de entorno llamada WELCOME_MESSAGE para mostrar un mensaje inicial. Si no se define, usa "¡Bienvenido al conversor de temperaturas!" por defecto.
2. Usa el módulo readline para solicitar al usuario una temperatura en grados Celsius.
3. Calcula la conversión a Fahrenheit usando la fórmula: C* 9/5) + 32 (Se pueden ayudar buscando como es la fórmula en código en internet)
4. Muestra el resultado en la consola.
5. Despídete del usuario al final.
Indicaciones:
1. Crea un archivo llamado app.js para el código.
2. Usa dotenv para cargar el mensaje de bienvenida desde el archivo .env.
3. Configura la interfaz con readline y calcula la conversión.
4. Ejecuta el programa y prueba ingresando diferentes valores de temperatura. */

// Carga las variables de entorno
require('dotenv').config(); 
const readline = require('readline');

// Obtiene el saludo desde la variable de entorno
const saludo = process.env.WELCOME_MESSAGE || "¡Bienvenido al conversor de temperaturas! ";

// 1. Creamos la interfaz de lectura desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Preguntamos
rl.question('Buen día, me podrias decir una temperatura en grados Celsius ', (tempCel) => {
    const tempFar = (parseFloat(tempCel) * 9/5) + 32;

    console.log(`La temperatura ${tempCel}°C equivale a ${tempFar}°F`);
    // 6. Cerramos la interfaz
    rl.close();
});


// Manejamos el evento de cierre para finalizar el programa.
rl.on('close', () => {
    console.log(`Gracias por usar el conversor de temperaturas!`);
    process.exit(0);
});

