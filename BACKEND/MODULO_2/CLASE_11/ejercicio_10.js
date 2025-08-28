// Ejercicio 10: Juego de Preguntas y Respuestas

const readlineSync = require('readline-sync');

// Conjunto de preguntas y respuestas
const preguntas = [
  { pregunta: "Cuanto es 2 + 2 / 2 + 8 =", respuesta: "11" },
  { pregunta: "Cuanto es 5 + 7 - 4 =", respuesta: "8" },
  { pregunta: "Cuanto es 15 / 3 - 4 =", respuesta: "1" },
  { pregunta: "Cuanto es 25 + 7 - 4 =", respuesta: "28" },
  { pregunta: "Calcula: 122 /2 =", respuesta: "61" }
];

console.log("🎯 Bienvenida al juego de Preguntas y Respuestas");

let aciertos = 0;

for (const item of preguntas) {
  const respuestaUsuario = readlineSync.question(`${item.pregunta} `);
  
  if (respuestaUsuario.trim().toLowerCase() === item.respuesta.toLowerCase()) {
    console.log("✅ Correcto!");
    aciertos++;
  } else {
    console.log(`❌ Incorrecto. La respuesta correcta es: ${item.respuesta}`);
  }
}

// Resultado final
console.log(`\n🎉 Has acertado ${aciertos} de ${preguntas.length} preguntas.`);
