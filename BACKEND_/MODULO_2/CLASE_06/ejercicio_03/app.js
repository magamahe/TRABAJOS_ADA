/* Requisitos del programa:
1. Usa el módulo readline para crear una interfaz interactiva.
2. Pide al usuario que ingrese dos números, uno a la vez.
3. Calcula y muestra la suma de los dos números.
4. Finaliza el programa con un mensaje de agradecimiento.
Indicaciones:
1. Crea un archivo llamado app.js.
2. Usa readline.createInterface para manejar la entrada y salida del usuario.
3. Utiliza callbacks para procesar las respuestas del usuario.
4. Ejecuta el programa y prueba ingresando diferentes valores. */

const readline = require('readline');

// 1. Creamos la interfaz de lectura desde la consola
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 2. Preguntamos el primer número
rl.question('Ingrese el primer número: ', (num1) => {
    
    // 3. Preguntamos el segundo número
    rl.question('Ingrese el segundo número: ', (num2) => {
    
        // 4. Calculamos la suma
        const suma = parseFloat(num1) + parseFloat(num2);

        // 5. Mostramos el resultado
        console.log(`La suma de ${num1} y ${num2} es: ${suma}`);

        // 6. Cerramos la interfaz
        rl.close();
  });
});

// Manejamos el evento de cierre para finalizar el programa.
rl.on('close', () => {
    console.log('Gracias por usar el programa. ¡Hasta luego!');
    process.exit(0);
});
