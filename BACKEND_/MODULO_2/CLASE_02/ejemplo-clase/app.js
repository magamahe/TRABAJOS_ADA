// Importamos el modulo nativo 'fs' para trabajar con el sistema de archivos
const fs = require('fs');

// Definir la ruta del archivo JSON que vamos a manipular
const rutaArchivo = './productos.json';

// Paso 1: Leer el archivo JSON
// Utilizar el método 'readFile' del módulo 'fs'. Este método lo que hace es leer el archivo de forma asíncrona.
fs.readFile(rutaArchivo, 'utf8', (err, data) => {
    if (err) {
        // Si ocurre un error al leer el archivo, mostramos el error en la consola
        console.error('Error al leer el archivo: ', err);
        return; // Detener la ejecucuión si hay un error
    }

    // Convertimos el contenido del archivo JSON (texto) a un objeto JavaScript utilizando JSON.parse()
    const productos = JSON.parse(data);

    // Mostramos el contenido actual del archivo JSON en la consola
    console.log('\nProductos actuales:\n', productos);

    // Paso 2: Agregar un nuevo producto al listado
    // Crear un nuevo objeto que represente el nuevo producto
    const nuevoProducto = {
        id: productos.length + 1, //Calculamos de forma automatica el ID
        nombre: "Auriculares", // nombre del nuevo producto
        precio: 45 // precio del nuevo producto
    };

    // Añadimos el nuevo producto al array de productos ya existentes
    productos.push(nuevoProducto);

    // Mostramos el nuevo producto por consola
    console.log('\nProductos actualizados: \n', productos);

    // Paso 3: Escribir el archivo JSON actualizado
    // Convertimos el objeto JavaScript (productos) nuevamente a un textos JSON utilizando JSON.stringify()
    const contenidoActualizado = JSON.stringify(productos, null, 2)
    // null significa que no deseamos modificar los valores claves del objeto antes de convertirlo a JSON.
    // Formateamos con 2 espacios para mejorar la legibilidad

    // Escribimos el nuevo contenido  en el archivo JSON utilizando 'writeFile'
    fs.writeFile(rutaArchivo, contenidoActualizado, (err) => {
        if (err) {
            // Si ocurre un error al escribir el archivo, mostramos el error en la consola
            console.error('Error al escribir el archivo: ', err);
            return; // Detenemos la ejecucion si hay un error
        }

        console.log('Archivo actualizado correctamente.');
    });
});