/* Actividad 4: Control de inventario */
const fs = require('fs');
const path = './inventario.json';

/// LEER ARCHIVO (versión segura sin try)
const cargar = () => {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, '[]'); // Crea archivo vacío si no existe
  }

  const contenido = fs.readFileSync(path, 'utf-8').trim();
  
  if (!contenido) return []; // Si está vacío, devolvemos un array vacío

  const datos = JSON.parse(contenido); // Convertimos a objeto/array
  if (Array.isArray(datos)) {
    return datos;
  } else {
    return []; // Si no es un array, devolvemos vacío (por si el archivo tiene algo raro)
  }
};

/// GUARDAR ARCHIVO
const guardar = (productos) => {
  fs.writeFileSync(path, JSON.stringify(productos, null, 2), 'utf-8');
};

/// AGREGAR PRODUCTO
const agregar = (nombre, cantidad) => {
  const productos = cargar();

  const nuevoProducto = {
    id: productos.length + 1,
    nombre: nombre.trim(),
    cantidad: Number(cantidad)
  };

  productos.push(nuevoProducto);
  guardar(productos);
  console.log(`✅ Producto agregado: ${nuevoProducto.nombre} (${nuevoProducto.cantidad} unidades)`);
};

/// LISTAR PRODUCTOS
const listar = () => {
  const productos = cargar();

  if (productos.length === 0) {
    console.log('📭 No hay productos registrados.');
    return;
  }

  console.log('📦 Lista de productos disponibles:');
  productos.forEach(p => {
    console.log(`${p.id}. ${p.nombre}, ${p.cantidad} unidades`);
  });
};

/// ACTUALIZAR CANTIDAD
const actualizar = (id, cantidad) => {
  if (!id || !cantidad) {
    console.log('❌ Debés pasar el ID y la nueva cantidad.');
    return;
  }

  const productos = cargar();
  const producto = productos.find(p => p.id === parseInt(id));

  if (!producto) {
    console.log(`❌ No se encontró ningún producto con ID ${id}.`);
    return;
  }

  producto.cantidad = parseInt(cantidad);
  guardar(productos);
  console.log(`🔄 Producto actualizado: "${producto.nombre}" ahora tiene ${producto.cantidad} unidades.`);
};

/// MENÚ DESDE TERMINAL
const [,, comando, ...args] = process.argv;

if (comando === 'agregar') {
  agregar(args[0], args[1]);
} else if (comando === 'listar') {
  listar();
} else if (comando === 'actualizar') {
  actualizar(args[0], args[1]);
} else {
  console.log('⚠️ Comando no reconocido. Usá: agregar, listar o actualizar');
}
