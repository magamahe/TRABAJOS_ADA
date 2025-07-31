const utils = require('./utils');

// Creamos el perfil con los datos que pide el ejercicio
const perfil = {
  nombre: "María",
  edad: 28,
  ciudadFavorita: "París"
};

// Guardamos el perfil en 'perfil.json' dentro de la carpeta JSON
utils.guardar('perfil.json', perfil, (error) => {
  if (error) {
    console.error("Hubo un error al crear tu perfil:", error);
  } else {
    console.log("¡Perfil creado exitosamente! 🎉 Revisa el archivo JSON/perfil.json");
  }
});
