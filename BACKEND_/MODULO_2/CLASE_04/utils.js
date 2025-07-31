const fs = require('fs');
const path = require('path');

const rutaArchivo = (nombreArchivo) => path.join(__dirname, 'JSON', nombreArchivo);

const guardar = (nombreArchivo, data) => {
  const ruta = rutaArchivo(nombreArchivo);
  fs.writeFileSync(ruta, JSON.stringify(data, null, 2), 'utf-8');
};

const cargar = (nombreArchivo) => {
  const ruta = rutaArchivo(nombreArchivo);
  if (!fs.existsSync(ruta)) return null;
  const contenido = fs.readFileSync(ruta, 'utf-8');
  return JSON.parse(contenido);
};

const eliminarArchivo = (nombreArchivo) => {
  const ruta = rutaArchivo(nombreArchivo);
  if (fs.existsSync(ruta)) {
    fs.unlinkSync(ruta);
  }
};

const archivoExiste = (nombreArchivo) => {
  return fs.existsSync(rutaArchivo(nombreArchivo));
};

const copiarArchivo = (origen, destino) => {
  const rutaOrigen = rutaArchivo(origen);
  const rutaDestino = rutaArchivo(destino);
  fs.copyFileSync(rutaOrigen, rutaDestino);
};

module.exports = {
  guardar,
  cargar,
  eliminarArchivo,
  archivoExiste,
  copiarArchivo
};