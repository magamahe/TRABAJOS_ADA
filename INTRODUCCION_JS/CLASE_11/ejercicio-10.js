/* Ejercicio 10: Adivina el número
Consigna:
Crea un programa donde la computadora seleccione un número al azar entre 1 y 10. Luego, pide al usuario que adivine el número hasta 3 intentos. Si el usuario acierta en cualquiera de los intentos, muestra un mensaje de felicitación y detén los intentos restantes. Si no acierta después de los 3 intentos, muestra el número secreto. Usa un for para resolver este ejercicio.

 */
/* 
const prompt = require('prompt-sync')();
const numeroSecreto = Math.floor(Math.random() * 10) + 1; // Número al azar entre 1 y 10
let intentos = 3;   
let acertado = false;
for (let i = 0; i < intentos; i++) {
    const adivinanza = parseInt(prompt(`Intento ${i + 1}: Adivina el número (entre 1 y 10): `));
    
    if (adivinanza === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        acertado = true;
        break; // Detiene los intentos restantes
    } else {
        console.log("No has acertado. Inténtalo de nuevo.");
    }
} */


const prompt = require("prompt-sync")();

// Genera un número secreto entre 1 y 10

// Math.random() genera un número decimal (entre 0 y 1), (ejemplo: 0.374, 0.895, 0.001)
// * 10 para que esté entre 0 y 10,  (ejemplo: 0.374 * 10 = 3.74)
// Math.floor para redondear hacia abajo y sumamos 1 para que esté entre 1 y 10.
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let acertado = false;

for (let intento = 1; intento <= 3; intento++) {
    let respuesta = parseInt(prompt(`Intento ${intento}: Adivina el número entre 1 y 10: `));

    if (isNaN(respuesta) || respuesta < 1 || respuesta > 10) {
        console.log("Por favor, ingresa un número válido entre 1 y 10.");
        //console.log(intento);
        intento--; // No cuenta este intento
       //console.log(intento);
        continue;
        /* CONTINUE 
        Porque detiene la lógica del juego si la entrada es inválida, para que:
        No se analice una suposición inválida.
        No se muestre el mensaje de error seguido por "Incorrecto".
        Se repita el intento correctamente (gracias a intento--). */
    }

    if (respuesta === numeroSecreto) {
        console.log(`¡Felicidades! El número secreto era (${numeroSecreto}) y lo adivinaste en el intento ${intento}.`);
        acertado = true;
        break; // Sale del ciclo porque adivinó
    } else {
        console.log("Número incorrecto.");
    }
}

if (!acertado) {
    console.log(`Lo siento, no adivinaste. El número secreto era: ${numeroSecreto}`);
}

