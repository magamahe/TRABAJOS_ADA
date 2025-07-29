// index_5.js - Registro de contactos
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'contactos.json';

// 1. Agregar contacto
function agregarContacto(nombre, telefono, correo) {
  if (!nombre || !telefono || !correo) {
    console.log('❌ Debés pasar nombre, teléfono y correo.');
    return;
  }
  const contactos = cargar(ARCHIVO);
  const nuevo = {
    id: contactos.length + 1,
    nombre: nombre.trim(),
    telefono: telefono.trim(),
    correo: correo.trim()
  };
  contactos.push(nuevo);
  guardar(ARCHIVO, contactos);
  console.log(`✅ Contacto agregado: ${nuevo.nombre} - Tel: ${nuevo.telefono} - Email: ${nuevo.correo}`);
}

// 2. Listar contactos
function listarContactos() {
  const contactos = cargar(ARCHIVO);
  if (contactos.length === 0) {
    console.log('📭 No hay contactos registrados.');
    return;
  }

  console.log('📇 Lista de contactos:');
  contactos.forEach(c => {
    console.log(`${c.id}. ${c.nombre} - Tel: ${c.telefono} - Email: ${c.correo}`);
  });
}

// 3. Eliminar contacto por ID
function eliminarContacto(id) {
  if (!id) {
    console.log('❌ Debés pasar el ID del contacto a eliminar.');
    return;
  }
  const contactos = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const nuevosContactos = contactos.filter(c => c.id !== idNum);
  if (nuevosContactos.length === contactos.length) {
    console.log(`❌ No se encontró contacto con ID ${idNum}.`);
    return;
  }
  guardar(ARCHIVO, nuevosContactos);
  console.log(`🗑️ Contacto con ID ${idNum} eliminado.`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarContacto(args[0], args[1], args[2]);
    break;
  case 'listar':
    listarContactos();
    break;
  case 'eliminar':
    eliminarContacto(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar nombre telefono correo | listar | eliminar id');
}
