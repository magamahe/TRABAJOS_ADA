// utils.js
const fs = require('fs');
const path = require('path');

// Función para cargar datos desde un archivo JSON
function cargar(ruta) {
  const rutaCompleta = path.join(__dirname, 'JSON', ruta);
  if (!fs.existsSync(rutaCompleta)) {
    fs.writeFileSync(rutaCompleta, '[]');
  }
  const contenido = fs.readFileSync(rutaCompleta, 'utf-8');
  try {
    return JSON.parse(contenido);
  } catch (error) {
    console.log('❌ Error al leer el archivo JSON:', error.message);
    return [];
  }
}

// Función para guardar datos en un archivo JSON
function guardar(ruta, datos) {
  const rutaCompleta = path.join(__dirname, 'JSON', ruta);
  fs.writeFileSync(rutaCompleta, JSON.stringify(datos, null, 2), 'utf-8');
}

// Función genérica para eliminar por ID
function eliminarPorId(ruta, id) {
  const datos = cargar(ruta);
  const actualizados = datos.filter(item => item.id !== parseInt(id));
  guardar(ruta, actualizados);
  console.log(`🗑️ Elemento con ID ${id} eliminado correctamente.`);
}

// Función para listar elementos
function listar(ruta) {
  const datos = cargar(ruta);
  if (datos.length === 0) {
    console.log('📭 No hay elementos para mostrar.');
    return;
  }
  console.log('📋 Lista de elementos:');
  datos.forEach(item => console.log(item));
}

module.exports = {
  cargar,
  guardar,
  eliminarPorId,
  listar
};
