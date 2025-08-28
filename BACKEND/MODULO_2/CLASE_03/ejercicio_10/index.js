/* Actividad 10: Gestión de compras
Consigna: Crea un programa que registre las compras realizadas. El programa debe permitirte:
1. Agregar una compra: Registrar una compra con su nombre y precio.
2. Listar las compras: Mostrar todas las compras registradas.
3. Eliminar una compra: Eliminar una compra de la lista.
Pistas:
• Usa un archivo JSON para guardar las compras.
• Si el archivo no existe, comienza con un arreglo vacío.
• Cada compra debe tener un ID único. */


const fs = require('fs');
const path = './compras.json';

//1.

//LEER
const cargar = () => {
    if (!fs.existsSync(path)) {
        fs.writeFileSync(path, '[]'); // Si no existe, crea un archivo vacío
    }
    const contenido = fs.readFileSync(path, 'utf-8');
    return JSON.parse(contenido); // Convertimos el contenido a un arreglo de tareas
};

//GUARDAR
const guardar = (compras) => {
    fs.writeFileSync(path, JSON.stringify(compras, null, 2)); // Escribimos las tareas en el archivo
};


// AGREGAR nombre, precio
const agregar = (nombre, precio) => {
    const compras = cargar(); // Leemos las tareas existentes

    const nuevaCompra = {
        id: compras.length + 1,
        nombre: nombre.trim(),
        precio: parseFloat(precio.replace(',', '.'))
    };
    compras.push(nuevaCompra); // Agregamos nuevo 
    guardar(compras); // Guardamos la lista actualizada
    console.log(`Compra agregada: "${nuevaCompra.id}. producto: ${nuevaCompra.nombre}, precio: ${nuevaCompra.precio.toFixed(2)}"`);
};

//2 LISTAR

const listar = () => {
    const compras = cargar(); // Leemos
    console.log('Lista de Productos:');
    compras.forEach(producto => {
        console.log(`${producto.id}: ${producto.nombre}, $ ${producto.precio}`);
    });}


//3 ELIMINAR
const eliminar = (id) => {
    let compras = cargar(); // Leemos las tareas
    compras = compras.filter(producto => producto.id !== parseInt(id)); // Filtramos para eliminar 
    guardar(compras); // Guardamos la lista actualizada
    console.log(`Compra eliminada.`);
};


//// MENU
// Detectar comando desde la consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregar(args[0], args[1] );
    break;
  case 'listar':
    listar();
    break;
  case 'eliminar':
    eliminar(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar, listar o eliminar');
}