/* Ejercicio 7: Encuentra tu meta perdida
Consigna: Revisa tu lista de metas en el archivo metas.json. Busca si una meta específica, como “Viajar a Japón”, ya está incluida. Si no, agrégala.
Pista: Usa fs.readFile para leer el archivo y un método como find para buscar en la lista. */

const utils = require('./utils');

const archivoMetas = 'metas.json';
const metaBuscada = "Viajar a CHINA";
//const metaBuscada = "Viajar a Japón";

utils.cargar(archivoMetas, (error, metas) => {
  if (error) {
    console.error("Error al cargar metas:", error);
    return;
  }

  if (!metas) {
    console.log("El archivo metas.json no existe, creando uno nuevo...");
    metas = [];
  }

  // Buscamos si ya existe la meta
  const existeMeta = metas.find(meta => meta === metaBuscada);

  if (existeMeta) {
    console.log(`La meta "${metaBuscada}" ya está en la lista.`);
  } else {
    metas.push(metaBuscada);
    utils.guardar(archivoMetas, metas, (errorGuardar) => {
      if (errorGuardar) {
        console.error("Error al guardar metas:", errorGuardar);
      } else {
        console.log(`Meta "${metaBuscada}" agregada correctamente.`);
      }
    });
  }
});
