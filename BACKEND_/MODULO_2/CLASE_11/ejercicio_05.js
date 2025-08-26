// Ejercicio 5: Adivina el Número

const readlineSync = require('readline-sync');

// Generamos un número aleatorio entre 1 y 10
const numeroSecreto = Math.floor(Math.random() * 10) + 1;

console.log("🎲 Bienvenida al juego: Adivina el numero (entre 1 y 10)");

let adivinado = false;

while (!adivinado) {
  const intento = readlineSync.questionInt("Ingresa tu numero: ");

  if (intento === numeroSecreto) {
    console.log(`🎉 ¡Correcto! El numero secreto era ${numeroSecreto}.`);
    adivinado = true;
  } else if (intento < numeroSecreto) {
    console.log("📉 El numero secreto es MAYOR.");
  } else {
    console.log("📈 El numero secreto es MENOR.");
  }
}
