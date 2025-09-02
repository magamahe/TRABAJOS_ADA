// Importamos modulo 'fs' (File System), que nos va a permitir trabajar con el sistema de archivos
const fs = require('fs');

// Importamos modulo 'path', que nos va a ayudar a manejar y transformar las rutas de los archivos
const path = require('path');

// Definimos la ruta del archivo 'data.json', que está en el mismo directorio que este script.
// __dirname es una variable global en Node.js que contiene la ruta del directorio actual.
const dataPath = path.join(__dirname, 'data.json');

// Creamos un objeto 'VehicleModel', que contiene metodos para interactuar con los datos de 'data.json'
const VehicleModel = {
    // Metodo para obtener un vehiculo por su ID
    getVehicleById: (id) => {
        // leemos el contenido del archivo
        const rawData = fs.readFileSync(dataPath);

        // Convertimos el contenido del archivo JSON a un objeto JavaScript (con parse)
        const vehicles = JSON.parse(rawData);

        // Buscamos el vehiculo cuyo ID coincide con el ID buscado
        // Si no se encuentra ningun vehiculo con ese ID, retorna null
        return vehicles.find(vehicle => vehicle.id === id) || null;
    }
};

// Exportamos el objeto 'VehicleModel' para que pueda ser utilizado en otros archivos
module.exports = VehicleModel;