// Paso 1: Empezamos con el modelo
// Hacemos las importaciones 
// fs = file system y es para trabajar con el sistema de archivos
// path = Nos ayuda a manejar las rutas de archivos
const fs = require('fs')
const path = require('path')

// Paso 2: Definimos la ruta del archivo 'data.json' que esta en el mismo directorio que este archivo
// __dirname es una variable global que contiene la ruta del directorio actual
const dataPath = path.join(__dirname, 'data.json')

// Paso 3: Creamos un objeto que contendra metdos para interactuar con los datos de los vehiculos
const VehicleModel = {
    // Metodo para obtener un vehiculo por id
    getVehicleById: (id) => {
        // leemos el archivo json de manera sincrono 
        const rawData = fs.readFileSync(dataPath)
        // convertimos el contenido del archivo de json a javascript
        const vehicles = JSON.parse(rawData)
        // Buscamos el vehiculo cuyo id coincida con el id proporcionado
        // si no encuentra ningun vehiculo con ese id, retorna null
        return vehicles.find(vehicle => vehicle.id === id || null)
    }
}

// exportamos el objeto 'vehicleModel' para que pueda ser utilizado en otros archivos
module.exports = VehicleModel