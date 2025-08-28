/* Ejercicio 2: Descubre tu perfil
Consigna: Es hora de revisar tu perfil digital. Lee el archivo perfil.json que creaste en el ejercicio anterior y muestra la información en la consola para asegurarte de que todo está correcto.
Pista: Utiliza fs.readFile con la codificación 'utf-8' para obtener el contenido del archivo como texto legible. */

const utils = require('./utils');

utils.cargar('perfil.json', (error, perfil) => {
  if (error) {
    console.error("Hubo un error al cargar el perfil:", error);
  } else if (!perfil) {
    console.log("No se encontró el archivo perfil.json.");
  } else {
    console.log("Perfil cargado correctamente:");
    console.log(`Nombre: ${perfil.nombre}`);
    console.log(`Edad: ${perfil.edad}`);
    console.log(`Ciudad Favorita: ${perfil.ciudadFavorita}`);
  }
});
