/* 
Dado un párrafo como string, contar cuántas veces aparece la palabra "importante" (sin diferenciar mayúsculas).
*/

const parrafo = `Es muy Importante que completes el trabajo. Lo más importante es que entiendas el concepto. IMPORTANTE: repasar todo antes de entregar.`;

// Pasamos todo a minúsculas y limpiamos signos de puntuación
const limpio = parrafo.toLowerCase().replace(/[.,:;!?]/g, '');

// Convertimos en array de palabras
const palabras = limpio.split(" ");

// Contamos cuántas veces aparece "importante"
let contador = 0;
palabras.forEach(palabra => {
  if (palabra === "importante") {
    contador++;
  }
});
console.log(`frase: " ${parrafo} "`)
console.log(`La palabra "importante" aparece ${contador} veces.`);
