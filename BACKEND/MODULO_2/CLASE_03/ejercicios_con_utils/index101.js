const { cargar, guardar, eliminarPorId, listar } = require('./utils');
const ARCHIVO = 'compras.json';

// Agregar compra
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

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarCompra(args[0], args[1]);
    break;
  case 'listar':
    listar(ARCHIVO);
    break;
  case 'eliminar':
    eliminarPorId(ARCHIVO, args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar nombre precio | listar | eliminar id');
}
