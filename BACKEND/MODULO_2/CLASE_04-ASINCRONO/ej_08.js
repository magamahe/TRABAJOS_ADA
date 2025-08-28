/* Ejercicio 8: Cuenta tus metas
Consigna: ¿Sabes cuántas metas has establecido? Escribe un programa que lea tu archivo metas.json y cuente cuántas metas tienes actualmente.
Pista: Usa length para obtener la cantidad de elementos en la lista. */

const utils = require('./utils');

const archivoMetas = 'metas.json';

utils.cargar(archivoMetas, (error, metas) => {
  if (error) {
    console.error("Error al cargar metas:", error);
    return;
  }

  if (!metas || !Array.isArray(metas)) {
    console.log("No hay metas registradas aún.");
    return;
  }

  const cantidad = metas.length;
  console.log(`Tienes ${cantidad} meta(s) registrada(s).`);
});
