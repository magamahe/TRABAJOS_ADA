/* Ejercicio 9: Filtra tus metas completas
Consigna: Supongamos que cada meta tiene un estado: “completa” o “pendiente”. Filtra las metas que ya completaste y muéstralas en la consola.
Pista: Modifica las metas para que sean objetos con un atributo estado. Usa el método filter para obtener las completas. */

const utils = require('./utils');

const archivoMetas = 'metas.json';

utils.cargar(archivoMetas, (error, metas) => {
  if (error) {
    console.error("Error al cargar metas:", error);
    return;
  }

  if (!metas || !Array.isArray(metas)) {
    console.log("No hay metas para revisar.");
    return;
  }

  // Filtrar las metas completas
  const completas = metas.filter(meta => meta.estado === "completa");

  if (completas.length === 0) {
    console.log("Aún no has completado ninguna meta.");
  } else {
    console.log("✅ Metas completadas:");
    completas.forEach(meta => console.log(`- ${meta.descripcion}`));
  }
});
