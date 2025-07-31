/* Ejercicio 3: ¡Actualiza tu estilo!
Consigna: ¿Has cambiado tu estilo o actividad reciente? ¡Es momento de actualizar tu perfil! Agrega un nuevo atributo hobby a tu perfil y guarda los cambios en el archivo perfil.json.
Pista: Primero, lee el archivo existente, actualiza el objeto y vuelve a escribirlo. */

const utils = require('./utils');

utils.cargar('perfil.json', (error, perfil) => {
  if (error) {
    console.error("Error al cargar el perfil:", error);
  } else if (!perfil) {
    console.log("No existe el archivo perfil.json para actualizar.");
  } else {
    // Actualizamos el perfil con el nuevo atributo hobby
    perfil.hobby = "Pintar";

    // Guardamos el perfil actualizado
    utils.guardar('perfil.json', perfil, (errorGuardar) => {
      if (errorGuardar) {
        console.error("Error al guardar el perfil actualizado:", errorGuardar);
      } else {
        console.log("Perfil actualizado correctamente con hobby.");
      }
    });
  }
});
