/* Ejercicio 4: Gestión de Estudiantes
Instrucciones
1. Dentro de la carpeta clase2/ejercicio4, crea dos archivos:
- estudiantes.js
- gestionEstudiantes.js
2. En estudiantes.js:
- Crea un array de objetos que represente una lista de estudiantes.
- Cada estudiante debe tener las propiedades: nombre, edad, curso y notas (un array de números).
- Exporta este array usando module.exports.
3. En gestionEstudiantes.js:
- Importa el array desde estudiantes.js.
- Muestra en la consola los nombres de todos los estudiantes.
- Calcula y muestra el promedio de notas de un estudiante específico.
- Agrega un nuevo estudiante al array y muestra el array actualizado en formato JSON. */

// Importamos el módulo 'fs' para leer y escribir archivos
const fs = require('fs');

// Importamos el array de estudiantes desde el archivo 'estudiantes.js'
const estudiantes = require('./estudiantes');

// 🔹 Mostrar los nombres de todos los estudiantes
console.log('\n🎓 Nombres de estudiantes:', estudiantes.map(est => est.nombre).join(', '));

// 🔹 Función para calcular el promedio de notas
function calcularPromedio(notas) {
    const suma = notas.reduce((acum, nota) => acum + nota, 0);
    return suma / notas.length;
}

// 🔹 Mostrar el promedio de un estudiante específico (ejemplo: el segundo en el array)
console.log(`📊 Promedio de ${estudiantes[1].nombre}:`, calcularPromedio(estudiantes[1].notas).toFixed(2));

// 🔹 Definimos un nuevo estudiante
const nuevoEstudiante = {
    nombre: 'ANA',
    edad: 19,
    curso: 'BACKEND',
    notas: [10, 10, 10]
};

// 🔹 Verificamos si el estudiante ya existe para evitar duplicados
const yaExiste = estudiantes.some(est =>
    est.nombre.toLowerCase() === nuevoEstudiante.nombre.toLowerCase()
);

// 🔹 Si no existe, lo agregamos al array
if (!yaExiste) {
    estudiantes.push(nuevoEstudiante);
    console.log(`\n✅ Estudiante ${nuevoEstudiante.nombre} agregado.`);
} else {
    console.log(`\n⚠️ El estudiante ${nuevoEstudiante.nombre} ya existe. No se agregó.`);
}

// 🔹 Convertimos el array actualizado a formato JSON legible
const contenidoActualizado = JSON.stringify(estudiantes, null, 2);

// 🔹 Mostramos en consola el JSON generado
console.log('\n📦 Estudiantes actualizados (JSON):\n', contenidoActualizado);

// 🔹 Guardamos el contenido en un archivo JSON
const rutaArchivo = './estudiantesJSON.json';

fs.writeFile(rutaArchivo, contenidoActualizado, 'utf8', (err) => {
    if (err) {
        console.error('❌ Error al escribir el archivo:', err);
        return; // Detenemos ejecución si hay error
    }

    console.log('💾 Archivo "estudiantesJSON.json" guardado correctamente.');

    // 🔹 Leemos el archivo después de escribir para verificar su contenido
    fs.readFile(rutaArchivo, 'utf8', (errLectura, datosLeidos) => {
        if (errLectura) {
            console.error('❌ Error al leer el archivo:', errLectura);
            return;
        }

        // Mostramos el contenido guardado en el archivo
        console.log('\n📄 Contenido leído desde el archivo:\n', datosLeidos);
    });
});
