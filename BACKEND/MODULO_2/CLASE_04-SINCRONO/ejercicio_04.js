const { archivoExiste, guardar } = require('./utils');

if (!archivoExiste('perfil.json')) {
  const perfil = {
    nombre: "Perfil Básico",
    edad: 0,
    ciudadFavorita: "Ninguna"
  };
  guardar('perfil.json', perfil);
  console.log("📁 Archivo perfil.json no existía. Se creó uno nuevo.");
} else {
  console.log("✅ El archivo perfil.json ya existe.");
}
