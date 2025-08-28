/* Este ejercicio te permitirá explorar algunos métodos adicionales del módulo readline, como rl.setPrompt() y el evento 'line'. Escribe un programa interactivo que solicite varias palabras al usuario y las muestre en mayúsculas. El programa finalizará cuando el usuario escriba "salir".
Requisitos del programa:
1. Usa rl.setPrompt() para personalizar el mensaje que se muestra al usuario.
2. Usa el evento 'line' para procesar cada palabra que el usuario ingrese.
3. Si el usuario escribe "salir", el programa debe despedirse y finalizar.
Indicaciones:
1. Crea un archivo llamado app.js para el código.
2. Configura la interfaz de readline y procesa las entradas del usuario.
3. Usa el evento 'line' para manejar cada palabra ingresada */

const readline = require('readline');

// 1. Crear la interfaz de readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// 2. Personalizar el mensaje de entrada
rl.setPrompt('Escribí una palabra (o "salir" para terminar): ');
rl.prompt(); // Mostrar el mensaje

// 3. Manejar cada línea que ingresa el usuario
rl.on('line', (input) => {
  const palabra = input.trim(); // Eliminamos espacios al principio/final

  if (palabra.toLowerCase() === 'salir') {
    // Si el usuario escribe "salir", se cierra la interfaz
    rl.close();
  } else {
    // Mostrar la palabra en mayúsculas
    console.log(`➡️ ${palabra.toUpperCase()}`);
    rl.prompt(); // Volver a mostrar el mensaje
  }
});

// 4. Evento al cerrar la interfaz
rl.on('close', () => {
  console.log('👋 Gracias por participar. ¡Hasta la próxima!');
  process.exit(0); // Cerrar el programa correctamente
});
