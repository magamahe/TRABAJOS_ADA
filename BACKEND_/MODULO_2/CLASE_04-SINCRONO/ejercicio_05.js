const { eliminarArchivo, archivoExiste } = require('./utils');

if (archivoExiste('perfil.json')) {
  eliminarArchivo('perfil.json');
  console.log("🗑️ Archivo perfil.json eliminado.");
} else {
  console.log("⚠️ Archivo perfil.json no encontrado.");
}
