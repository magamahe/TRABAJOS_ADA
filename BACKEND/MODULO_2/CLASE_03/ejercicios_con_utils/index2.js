// index_2.js - Seguimiento de series de televisión
const { cargar, guardar } = require('./utils');
const ARCHIVO = 'series.json';

// 1. Registrar una serie (nombre y temporadas)
function agregarSerie(nombre, temporadas) {
  if (!nombre || !temporadas) {
    console.log('❌ Debés pasar nombre y temporadas.');
    return;
  }

  const series = cargar(ARCHIVO);
  const nueva = {
    id: series.length + 1,
    nombre: nombre.trim(),
    temporadas: parseInt(temporadas)
  };
  series.push(nueva);
  guardar(ARCHIVO, series);
  console.log(`🎬 Serie agregada: "${nueva.nombre}" con ${nueva.temporadas} temporada(s).`);
}

// 2. Listar las series
function listarSeries() {
  const series = cargar(ARCHIVO);
  if (series.length === 0) {
    console.log('📭 No hay series registradas.');
    return;
  }

  console.log('📺 Lista de series:');
  series.forEach(s => {
    console.log(`${s.id}. ${s.nombre} - ${s.temporadas} temporada(s)`);
  });
}

// 3. Actualizar temporadas
function actualizarTemporadas(id, nuevasTemporadas) {
  const series = cargar(ARCHIVO);
  const serie = series.find(s => s.id === parseInt(id));
  if (!serie) {
    console.log(`❌ No se encontró ninguna serie con ID ${id}`);
    return;
  }

  serie.temporadas = parseInt(nuevasTemporadas);
  guardar(ARCHIVO, series);
  console.log(`🔄 Temporadas actualizadas: "${serie.nombre}" ahora tiene ${serie.temporadas} temporada(s).`);
}

// Menú por consola
const [,, comando, ...args] = process.argv;

switch (comando) {
  case 'agregar':
    agregarSerie(args[0], args[1]);
    break;
  case 'listar':
    listarSeries();
    break;
  case 'actualizar':
    actualizarTemporadas(args[0], args[1]);
    break;
  default:
    console.log('⚠️ Comando no reconocido. Usá: agregar "nombre" temporadas | listar | actualizar id nuevasTemporadas');
}
