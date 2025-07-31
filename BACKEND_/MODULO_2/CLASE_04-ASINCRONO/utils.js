const fs = require('fs');
const path = require('path');

const rutaArchivo = (nombreArchivo) => path.join(__dirname, 'JSON', nombreArchivo);

const guardar = (nombreArchivo, data, callback) => {
  const ruta = rutaArchivo(nombreArchivo);
  fs.writeFile(ruta, JSON.stringify(data, null, 2), 'utf-8', (err) => {
    if (err) {
      // Error al guardar
      callback(`Error al guardar archivo ${nombreArchivo}: ${err.message}`);
    } else {
      // Éxito
      callback(null);
    }
  });
};

const cargar = (nombreArchivo, callback) => {
  const ruta = rutaArchivo(nombreArchivo);
  fs.exists(ruta, (existe) => {
    if (!existe) {
      // No existe archivo
      callback(null, null);
      return;
    }
    fs.readFile(ruta, 'utf-8', (err, contenido) => {
      if (err) {
        callback(`Error al leer archivo ${nombreArchivo}: ${err.message}`, null);
      } else {
        try {
          const datos = JSON.parse(contenido);
          callback(null, datos);
        } catch (parseErr) {
          callback(`Error al parsear JSON de ${nombreArchivo}: ${parseErr.message}`, null);
        }
      }
    });
  });
};

const eliminarArchivo = (nombreArchivo, callback) => {
  const ruta = rutaArchivo(nombreArchivo);
  fs.exists(ruta, (existe) => {
    if (!existe) {
      callback(`El archivo ${nombreArchivo} no existe.`);
      return;
    }
    fs.unlink(ruta, (err) => {
      if (err) {
        callback(`Error al eliminar archivo ${nombreArchivo}: ${err.message}`);
      } else {
        callback(null);
      }
    });
  });
};

const archivoExiste = (nombreArchivo, callback) => {
  const ruta = rutaArchivo(nombreArchivo);
  fs.exists(ruta, (existe) => {
    callback(existe);
  });
};

const copiarArchivo = (origen, destino, callback) => {
  const rutaOrigen = rutaArchivo(origen);
  const rutaDestino = rutaArchivo(destino);
  fs.exists(rutaOrigen, (existe) => {
    if (!existe) {
      callback(`El archivo origen ${origen} no existe.`);
      return;
    }
    fs.copyFile(rutaOrigen, rutaDestino, (err) => {
      if (err) {
        callback(`Error al copiar archivo de ${origen} a ${destino}: ${err.message}`);
      } else {
        callback(null);
      }
    });
  });
};

module.exports = {
  guardar,
  cargar,
  eliminarArchivo,
  archivoExiste,
  copiarArchivo
};
