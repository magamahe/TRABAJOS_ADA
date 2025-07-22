const prompt = require("prompt-sync")();

// Genera un número secreto entre 1 y 10

// Math.random() genera un número decimal (entre 0 y 1), (ejemplo: 0.374, 0.895, 0.001)
// * 10 para que esté entre 0 y 10,  (ejemplo: 0.374 * 10 = 3.74)
// Math.floor para redondear hacia abajo y sumamos 1 para que esté entre 1 y 10.
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

let acertado = false;

for (let intento = 1; intento <= 3; intento++) {
     let respuesta = parseInt(prompt(`Intento ${intento}: Adivina el número entre 1 y 10: `));
     switch (true) 
     {
        case (isNaN(respuesta) || respuesta < 1 || respuesta > 10):
             console.log("Por favor, ingresa un número válido entre 1 y 10.");
             intento--; // No cuenta este intento
             continue; // Repite el ciclo para un nuevo intento
        case respuesta === numeroSecreto:
             console.log(`¡Felicidades! El número secreto era (${numeroSecreto}) y lo adivinaste en el intento ${intento}.`);
             acertado = true;
             break;
        case respuesta < numeroSecreto:
            console.log("El número es mayor. Inténtalo de nuevo.");
             break;
        case respuesta > numeroSecreto:
             console.log("El número es menor. Inténtalo de nuevo.");
            break; // Sale del ciclo porque adivinó
         default:
             console.log("Número incorrecto.");
     }
     if (acertado) {
         break; // Sale del ciclo si adivinó
     }  
}
if (!acertado) {
    console.log(`Lo siento, no adivinaste. El número secreto era: ${numeroSecreto}`);
}