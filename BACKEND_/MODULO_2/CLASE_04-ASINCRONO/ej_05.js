/* Ejercicio 5: ¡Despídete de tu perfil!
Consigna: ¿Quieres empezar de cero? Es momento de eliminar tu archivo perfil.json. Verifica que el archivo existe antes de intentar borrarlo.
Pista: Usa fs.unlink para eliminar archivos */

const utils = require('./utils');

utils.eliminarArchivo('perfil.json', (error) => {
  if (error) {
    console.error("Error al eliminar perfil.json:", error);
  } else {
    console.log("Archivo perfil.json eliminado correctamente.");
  }
});
