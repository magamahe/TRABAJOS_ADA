// index_9.js - Registro de eventos
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'eventos.json';

// 1. Agregar evento (nombre, fecha, lugar)
function agregarEvento(nombre, fecha, lugar) {
  if (!nombre || !fecha || !lugar) {
    console.log('❌ Debés pasar nombre, fecha y lugar.');
    return;
  }
  const eventos = cargar(ARCHIVO);
  const nuevoEvento = {
    id: eventos.length + 1,
    nombre: nombre.trim(),
    fecha: fecha.trim(),
    lugar: lugar.trim()
  };
  eventos.push(nuevoEvento);
  guardar(ARCHIVO, eventos);
  console.log(`✅ Evento agregado: "${nuevoEvento.nombre}" - Fecha: ${nuevoEvento.fecha}, Lugar: ${nuevoEvento.lugar}`);
}

// 2. Listar eventos
function listarEventos() {
  const eventos = cargar(ARCHIVO);
  if (eventos.length === 0) {
    console.log('📭 No hay eventos registrados.');
    return;
  }
  console.log('📅 Eventos:');
  eventos.forEach(e => {
    console.log(`${e.id}. ${e.nombre} - Fecha: ${e.fecha}, Lugar: ${e.lugar}`);
  });
}

// 3. Eliminar evento por ID
function eliminarEvento(id) {
  if (!id) {
    console.log('❌ Debés pasar el ID del evento a eliminar.');
    return;
  }
  const eventos = cargar(ARCHIVO);
  const idNum = parseInt(id);
  const eventosFiltrados = eventos.filter(e => e.id !== idNum);
  if (eventos.length === eventosFiltrados.length) {
    console.log(`❌ No se encontró evento con ID ${idNum}.`);
    return;
  }
  guardar(ARCHIVO, eventosFiltrados);
  console.log(`✅ Evento con ID ${idNum} eliminado.`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarEvento(args[0], args[1], args.slice(2).join(' ')); // el lugar puede tener espacios
    break;
  case 'listar':
    listarEventos();
    break;
  case 'eliminar':
    eliminarEvento(args[0]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar nombre fecha lugar | listar | eliminar id');
}
