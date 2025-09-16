// index.js
import fs from "fs";
import path from "path";
import readlineSync from "readline-sync";

// En ESM __dirname no existe, se reemplaza así:
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Carpeta de notas
const carpetaNotas = path.join(__dirname, "notas");

// Crear carpeta si no existe
if (!fs.existsSync(carpetaNotas)) {
  fs.mkdirSync(carpetaNotas);
}

// Función para crear nota
function crearNota(titulo, contenido) {
  const rutaNota = path.join(carpetaNotas, `${titulo}.txt`);
  fs.writeFileSync(rutaNota, contenido);
  console.log("Nota creada:", titulo);
}

// Función para leer nota
function leerNota(titulo) {
  const rutaNota = path.join(carpetaNotas, `${titulo}.txt`);
  if (fs.existsSync(rutaNota)) {
    const contenido = fs.readFileSync(rutaNota, "utf-8");
    console.log(`Contenido de "${titulo}":\n${contenido}`);
  } else {
    console.log("La nota no existe.");
  }
}

// Menú interactivo
while (true) {
  const opcion = readlineSync.question(
    "¿Que deseas hacer? (1. Crear nota, 2. Leer nota, 3. Salir): "
  );

  if (opcion === "1") {
    const titulo = readlineSync.question("Titulo de la nota: ");
    const contenido = readlineSync.question("Contenido de la nota: ");
    crearNota(titulo, contenido);
  } else if (opcion === "2") {
    const titulo = readlineSync.question("Titulo de la nota a leer: ");
    leerNota(titulo);
  } else if (opcion === "3") {
    break;
  } else {
    console.log("Opcion no valida");
  }
}
