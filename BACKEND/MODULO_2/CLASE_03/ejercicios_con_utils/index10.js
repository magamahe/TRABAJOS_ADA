// index_10.js - Gestión de compras
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'compras.json';

// 1. Agregar compra (nombre, precio)
function agregarCompra(nombre, precio) {
  if (!nombre || !precio) {
    console.log('❌ Debés pasar nombre y precio.');
    return;
  }
  const compras = cargar(ARCHIVO);
  const nuevo = {
    id: compras.length + 1,
    nombre: nombre.trim(),
    precio: parseFloat(precio.replace(',', '.'))
  };
  if (isNaN(nuevo.precio)) {
    console.log('❌ Precio inválido.');
    return;
  }
  compras.push(nuevo);
  guardar(ARCHIVO, compras);
  console.log(`✅ Compra agregada: "${nuevo.nombre}" - Precio: $${nuevo.precio.toFixed(2)}`);
}

// 2. Listar compras
function listarCompras() {
  const compras = cargar(ARCHIVO);
  if (compras.length === 0) {
    console.log('📭 No hay compras registradas.');
    return;
  }
  console.log('🛒 Compras:');
  compras.forEach(c => {
    console.log(`${c.id}. ${c.nombre} - $${c.precio.toFixed(2)}`);
  });
}

// 3. Eliminar compra por ID
function eliminarCompra(id) {
  if (!id) {
    console.log('❌ Debés pasar el ID de la compra a eliminar.');
    return;
  }
  const compras = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const comprasFiltradas = compras.filter(c => c.id !== idNum);
  if (compras.length === comprasFiltradas.length) {
    console.log(`❌ No se encontró compra con ID ${idNum}.`);
    return;
  }
  guardar(ARCHIVO, comprasFiltradas);
  console.log(`✅ Compra con ID ${idNum} eliminada.`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarCompra(args[0], args[1]);
    break;
  case 'listar':
    listarCompras();
    break;
  case 'eliminar':
    eliminarCompra(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar nombre precio | listar | eliminar id');
}


//En terminal
/* node index_10.js agregar "Leche" 123.45
node index_10.js listar
node index_10.js eliminar 1 */