/* Ejercicio 6: Tu lista de metas
Consigna: Es momento de planear tus metas. Crea un archivo llamado metas.json con una lista vacía al principio. Luego, agrega metas como: “Aprender Node.js” y “Viajar a Japón”. Guarda la lista actualizada en el archivo.
Pista: Usa fs.writeFile para crear el archivo y agregar elementos a la lista. */
const utils = require('./utils');

const archivoMetas = 'metas.json';

// Paso 1: Crear archivo con lista vacía si no existe
utils.cargar(archivoMetas, (error, metas) => {
  if (error) {
    console.error("Error al cargar metas:", error);
    return;
  }

  if (!metas) {
    // No existe el archivo, lo creamos con lista vacía
    metas = [];
  }

  // Paso 2: Agregar las metas nuevas
  metas.push("Aprender Node.js");
  metas.push("Viajar a Japón");

  // Paso 3: Guardar el archivo actualizado
  utils.guardar(archivoMetas, metas, (errorGuardar) => {
    if (errorGuardar) {
      console.error("Error al guardar metas:", errorGuardar);
    } else {
      console.log("Metas guardadas correctamente en metas.json");
    }
  });
});
