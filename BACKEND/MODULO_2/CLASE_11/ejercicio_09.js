// Ejercicio 9: Calculadora de IMC

const readlineSync = require('readline-sync');

console.log("⚖️ Calculadora de IMC");

// Solicitamos peso y altura
const peso = readlineSync.questionFloat("Ingresa tu peso en kg: ");
const altura = readlineSync.questionFloat("Ingresa tu altura en metros: ");

// Calculamos IMC
const imc = peso / (altura * altura);

// Mostramos el resultado con 2 decimales
console.log(`\nTu IMC es: ${imc.toFixed(2)}`);

// Clasificación según OMS
if (imc < 18.5) {
  console.log("📉 Bajo peso");
} else if (imc < 25) {
  console.log("✅ Peso normal");
} else if (imc < 30) {
  console.log("⚠️ Sobrepeso");
} else {
  console.log("🚨 Obesidad");
}
