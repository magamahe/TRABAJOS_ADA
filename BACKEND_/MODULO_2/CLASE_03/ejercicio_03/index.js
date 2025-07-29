/* Actividad 3: Registro de tareas pendientes
Consigna: Crea un programa para gestionar tus tareas pendientes. El programa debe permitirte:
1. Agregar una tarea: Registrar una tarea pendiente con su descripción.
2. Listar las tareas: Mostrar todas las tareas registradas.
3. Eliminar una tarea: Eliminar una tarea de la lista.
Pistas:
• Usa un archivo JSON para guardar las tareas.
• Si el archivo no existe, comienza con un arreglo vacío.
• Eliminar una tarea se puede hacer por su ID. */

const fs = require('fs');
const path = './tareas.json';

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
const guardar = (tareas) => {
    fs.writeFileSync(path, JSON.stringify(tareas, null, 2)); // Escribimos las tareas en el archivo
};


// AGREGAR tarea
const agregar = (descripcion) => {
    const tareas = cargar(); // Leemos las tareas existentes
    tareas.push({ id: tareas.length + 1, descripcion }); // Agregamos la nueva tarea
    guardar(tareas); // Guardamos la lista actualizada
    console.log(`Tarea agregada: "${descripcion}"`);
};

//2 LISTAR

const listar = () => {
    const tareas = cargar(); // Leemos las tareas
    console.log('Lista de tareas pendientes:');
    tareas.forEach(tarea => {
        console.log(`${tarea.id}. ${tarea.descripcion}`);
    });
};

//3 ELIMINAR
const eliminar = (ID) => {
    let tareas = cargar(); // Leemos las tareas
    tareas = tareas.filter(tarea => tarea.id !== parseInt(ID)); // Filtramos para eliminar la tarea por ID
    guardar(tareas); // Guardamos la lista actualizada
    console.log(`Tarea eliminada.`);
};


//// MENU
// Detectar comando desde la consola
const [,, comando, ...args] = process.argv;

if (comando === 'agregar') {
  agregar(args[0]);
} else if (comando === 'listar') {
  listar();
} else if (comando === 'eliminar') {
  eliminar(args[0]);
}

