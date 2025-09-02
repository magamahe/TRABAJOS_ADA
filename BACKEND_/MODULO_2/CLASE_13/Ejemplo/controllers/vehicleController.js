// Paso 4: Importamos el modulo que hicimos en el modelo
// Este modulo contiene la logica para obtener los datos de los vehiculos
const VehicleModel = require('../models/vehicleModel')

// Paso 5: Importamos el modulo de la vista
// este modulo contiene la logica para formatear la respuesta que se enviara al usuario
const VehicleView = require('../views/vehicleView')

// Creamos un objeto que manejara las solicitudes relacionadas con vehiculos
const VehicleController = {
    // metodo para manejar solicitudes de vehiculos por id
    handleRequest: (id) => {
        // llamamos al metodo getVehicleById del modelo para obtener los datos del vehiculo
        // convertimos el id a un numero entero usando parseint (base 10)
        const vehicle = VehicleModel.getVehicleById(parseInt(id, 10))

        // llamamos al metodo formatResponse del view
        // este metodo toma los datos del vehiculo y los prepara para ser enviados al usuario
        return VehicleView.formatResponse(vehicle)
    }
}

// Exportamos el objto para que se use en otro lado (archivos)
module.exports = VehicleController