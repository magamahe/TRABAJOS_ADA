/* Actividad 2: Seguimiento de series de televisión
Consigna: ¡Es hora de organizar tus series favoritas! Crea un programa que permita:
1. Registrar una serie: Se debe registrar una serie con su nombre y la cantidad de temporadas.
2. Listar las series: Muestra todas las series registradas.
3. Actualizar las temporadas de una serie: Permite actualizar la cantidad de temporadas de una serie.

Pistas:
• Usa un archivo JSON para almacenar la información de las series.
• Si el archivo no existe, comienza con un arreglo vacío.
• ¿Qué es fs.existsSync()?
• El método fs.existsSync() es parte del módulo fs (file system) en Node.js. Este método se usa para comprobar si un archivo o directorio existe en el sistema de archivos de manera sincrónica, lo
que significa que el código se ejecuta y espera a que la operación se complete antes de continuar con el siguiente paso.
•
Sintaxis: fs.existsSync(path); */

const fs = require('fs');
const FILE_PATH = './series.json';

/// LEER ARCHIVO primero
const cargarSeries= () => {
    if (!fs.existsSync(FILE_PATH)) return [];
    const contenido = fs.readFileSync(FILE_PATH, 'utf8') ;//.trim();
    return contenido ? JSON.parse(contenido) : [];
}


//GUARDAR ARCHIVO
// Guardar archivo
const guardarSeries = (series) => {
  fs.writeFileSync(FILE_PATH, JSON.stringify(series, null, 2), 'utf8');
}

// REGISTRAR una nueva serie
const registrarSerie = (nombre, temporadas) =>{
    if (!nombre || !temporadas) {
        console.log('❌ Faltan datos.');
        return;
    }

    const series = cargarSeries();
    const nueva = {
        //id: Date.now(),
        id: series.length > 0 ? series[series.length - 1].id + 1 : 1, // Generar ID secuencial
        nombre: nombre.trim(),
        temporadas: Number(temporadas)
    };
    series.push(nueva);
    guardarSeries(series);
    console.log(`✅ Serie registrada: ${nueva.nombre} (${nueva.temporadas} temporadas)`);
}

// 2 LISTAR series

listarSeries = () =>{
    const series = cargarSeries();
    if (series.length === 0) {
        console.log('📭 No hay series registradas.');
        return;
    }

    console.log('📺 Series registradas:');
    series.forEach(serie => {
        console.log(`ID: ${serie.id} | ${serie.nombre} (${serie.temporadas} temporadas)`);
    });
}

// ACTUALIZAR

// Función para actualizar temporadas de una serie por ID
const actualizarTemporadas = (id, nuevasTemporadas) => {
  if (!id || !nuevasTemporadas) {
    console.log('❌ Debés pasar el ID y la nueva cantidad de temporadas.');
    return;
  }

  const series = cargarSeries();
  const serie = series.find(s => s.id === Number(id));

  if (!serie) {
    console.log(`❌ No se encontró ninguna serie con ID ${id}.`);
    return;
  }

  serie.temporadas = Number(nuevasTemporadas);
  guardarSeries(series);
  console.log(`🔄 Serie actualizada: "${serie.nombre}" ahora tiene ${serie.temporadas} temporadas.`);
};


//// MENU
// Detectar comando desde la consola
const [,, comando, ...args] = process.argv;

/* if (comando === 'registrarrSerie') {
  registarSerie(args[0], args[1]);
}  
if (comando === 'cargarSeries') {
  const series = cargarSeries();
  console.log('📺 Series cargadas:', series);
} */
if (comando === 'registrar') {
  registrarSerie(args[0], args[1]);
} else if (comando === 'listar') {
  listarSeries();
} else if (comando === 'actualizar') {
  actualizarTemporadas(args[0], args[1]);
}

