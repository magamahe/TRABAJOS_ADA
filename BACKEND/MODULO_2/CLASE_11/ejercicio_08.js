// Ejercicio 8: Generador de Frases Aleatorias

const readlineSync = require('readline-sync');

// Arrays predefinidos
const sujetos = ["El gato", "Mi hermano", "La profesora", "Un robot", "Mi perro"];
const verbos = ["come", "salta", "corrige", "observa", "juega con"];
const complementos = ["la comida", "el parque", "el examen", "el cielo", "la pelota"];

// Preguntamos cuántas frases desea generar
const cantidad = readlineSync.questionInt("¿Cuantas frases deseas generar? ");

// Función para generar una frase aleatoria
function generarFrase() {
  const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  const verbo = verbos[Math.floor(Math.random() * verbos.length)];
  const complemento = complementos[Math.floor(Math.random() * complementos.length)];
  return `${sujeto} ${verbo} ${complemento}.`;
}

// Generamos y mostramos las frases
console.log("\n📝 Frases generadas:");
for (let i = 0; i < cantidad; i++) {
  console.log(`${i + 1}. ${generarFrase()}`);
}
