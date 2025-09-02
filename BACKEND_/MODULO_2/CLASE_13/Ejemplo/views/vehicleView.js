// Paso 3: Creamos un objeto que contendra los metodos para formatear respuestas relacionadas con vehiculos
const VehicleView = {
    // Metodo para formatear la respuesta que se enviara al usuario
    formatResponse: (vehicle) => {
        // verificamos si el vehiculo es null o undefined (osea que no se encontro ninguno)
        if (!vehicle) {
            // si no se encontro el vehiculo, devolvemos un objeto json con un mensaje de error
            return JSON.stringify({
                status: "error", // indicacion de que hubo error
                message: "Vehiculo no encontrado" // mensaje descriptivo
            })
        }

        // si se encontro el vehiculo, devolvemos un objeto json con los datos del vehiculo
        return JSON.stringify({
            status: "success", // Indicamos que fue exitoso
            data: vehicle // incluimos los datos del vehiculo
        })
    }
}

module.exports = VehicleView