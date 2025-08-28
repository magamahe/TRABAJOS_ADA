/* Ejercicio 10: ¡Haz un respaldo de tus metas!
Consigna: Nunca está de más guardar una copia de seguridad. Escribe un programa que copie el contenido de metas.json en un archivo llamado respaldo_metas.json.
Pista: Usa el método fs.copyFile para copiar archivos de manera sencilla. */

const utils = require('./utils');

utils.copiarArchivo('metas.json', 'respaldo_metas.json', (error) => {
  if (error) {
    console.error("Error al hacer el respaldo:", error);
  } else {
    console.log("✅ Respaldo creado exitosamente como respaldo_metas.json");
  }
});
