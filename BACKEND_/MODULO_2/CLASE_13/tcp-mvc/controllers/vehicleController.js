// Importamos el módulo 'VehicleModel' desde la ruta '../models/vehicleModel'
// Este módulo va a contener la logica para obtener los datos de los vehiculos
const VehicleModel = require('../models/vehicleModel');

// Importamos el módulo 'VehicleView' desde la ruta '../views/vehicleView'
// Este módulo va a contener la logica para formatear la respuesta que se le enviara al usuario
const VehicleView = require('../views/vehicleView');

// Cremos un objeto llamado 'VehicleController' que manejara las solicitudes
const VehicleController = {
    // Metodo para manejar uan solicitud de vehiculo por ID
    handleRequest: (id) => {
        // Llamamos al metodo 'gtVehicleById' para obtener los datos del vehiculo
        // Convertimos el 'id' a un numero entero usando 'parseInt' (en base 10)
        const vehicle = VehicleModel.getVehicleById(parseInt(id, 10));

        // Llamamos al metodo 'formatResponse' del 'VehicleView' para formatear la respuesta que llega del modelo
        // Este metodo lo que hace es tomar los datos del vehiculo y preprarlos para ser enviados al usuario
        return VehicleView.formatResponse(vehicle);
    }
};

// Exportamos el objeto 'VehicleController'
module.exports = VehicleController;