// index_4.js - Control de inventario
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'inventario.json';

// 1. Agregar producto
function agregarProducto(nombre, cantidad) {
  if (!nombre || !cantidad) {
    console.log('❌ Debés pasar nombre y cantidad.');
    return;
  }
  const productos = cargar(ARCHIVO);
  const nuevo = {
    id: productos.length + 1,
    nombre: nombre.trim(),
    cantidad: Number(cantidad)
  };
  productos.push(nuevo);
  guardar(ARCHIVO, productos);
  console.log(`✅ Producto agregado: "${nuevo.nombre}" con cantidad ${nuevo.cantidad}`);
}

// 2. Listar productos
function listarProductos() {
  const productos = cargar(ARCHIVO);
  if (productos.length === 0) {
    console.log('📭 No hay productos registrados.');
    return;
  }

  console.log('📦 Inventario de productos:');
  productos.forEach(p => {
    console.log(`${p.id}. ${p.nombre} - Cantidad: ${p.cantidad}`);
  });
}

// 3. Actualizar cantidad por ID
function actualizarCantidad(id, cantidad) {
  if (!id || !cantidad) {
    console.log('❌ Debés pasar ID y nueva cantidad.');
    return;
  }
  const productos = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const producto = productos.find(p => p.id === idNum);
  if (!producto) {
    console.log(`❌ No se encontró producto con ID ${idNum}.`);
    return;
  }
  producto.cantidad = Number(cantidad);
  guardar(ARCHIVO, productos);
  console.log(`🔄 Producto actualizado: "${producto.nombre}" ahora tiene cantidad ${producto.cantidad}`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarProducto(args[0], args[1]);
    break;
  case 'listar':
    listarProductos();
    break;
  case 'actualizar':
    actualizarCantidad(args[0], args[1]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar nombre cantidad | listar | actualizar id cantidad');
}
