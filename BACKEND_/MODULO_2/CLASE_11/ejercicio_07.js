// Ejercicio 7: Conversor de Monedas (USD a EUR)

const readlineSync = require('readline-sync');

const TASA_USD_EUR = 0.85; // 1 USD = 0.85 EUR

console.log("💱 Bienvenida al conversor de dolares a euros");

// Pedimos la cantidad en dólares
const dolares = readlineSync.questionFloat("Ingresa la cantidad en dolares: ");

// Convertimos a euros
const euros = dolares * TASA_USD_EUR;

// Mostramos el resultado
console.log(`${dolares.toFixed(2)} USD equivalen a ${euros.toFixed(2)} EUR`);
