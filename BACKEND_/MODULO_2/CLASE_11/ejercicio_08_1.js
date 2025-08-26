// Ejercicio 8: Generador de Frases Aleatorias con Menú

const readlineSync = require('readline-sync');

// Arrays predefinidos
const sujetos = ["El gato", "Mi hermano", "La profesora", "Un robot", "Mi perro"];
const verbos = ["come", "salta", "corrige", "observa", "juega con"];
const complementos = ["la comida", "el parque", "el examen", "el cielo", "la pelota"];

// Función para generar una frase aleatoria
function generarFrase() {
  const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
  const verbo = verbos[Math.floor(Math.random() * verbos.length)];
  const complemento = complementos[Math.floor(Math.random() * complementos.length)];
  return `${sujeto} ${verbo} ${complemento}.`;
}

// Menú interactivo
let continuar = true;

while (continuar) {
  const opciones = ["Generar frases"];
  const indice = readlineSync.keyInSelect(opciones, "Elige una opcion:");

  switch (indice) {
    case 0: // Generar frases
      const cantidad = readlineSync.questionInt("¿Cuantas frases deseas generar? ");
      console.log("\n📝 Frases generadas:");
      for (let i = 0; i < cantidad; i++) {
        console.log(`${i + 1}. ${generarFrase()}`);
      }
      break;
    case -1: // Cancel automático
      console.log("\n¡Hasta luego!");
      continuar = false;
      break;
  }
}
