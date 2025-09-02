// Creamos un objeto llamado 'VehicleView' que contiene metodos para formatear la respuesta de la solicitud

const VehicleView = {

    formatResponse: (vehicle) => {
        // Verificamos si 'vehiculo' es null o undefined (es decir, no se encontro ningun vehiculo)
        if(!vehicle) {
            return JSON.stringify({
                status: "error", // Indicamos que hubo un error
                message: "Vehiculo no encontrado" // MEnsaje descriptivo del error
            });
        }

        return JSON.stringify({
            status: "success", // Indicamos que la operacion fue exitosa
            data: vehicle // Inluimos los datos del vehiculo en la respuesta
        });
    }
};

// Exportamos el objeto 'VehicleView' para que pueda ser utilizado
module.exports = VehicleView;