// index.mjs
import crypto from "crypto";
import fs from "fs";
import path from "path";
import readlineSync from "readline-sync";
import { fileURLToPath } from "url";

// Reconstruir __dirname en ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rutaMensajes = path.join(__dirname, "mensajes.json");
const rutaClave = path.join(__dirname, "clave.json");

// Crear archivo de mensajes si no existe
if (!fs.existsSync(rutaMensajes)) fs.writeFileSync(rutaMensajes, "[]");

// Crear o leer clave e IV persistentes
let clave, iv;
if (fs.existsSync(rutaClave)) {
  const datos = JSON.parse(fs.readFileSync(rutaClave, "utf-8"));
  clave = Buffer.from(datos.clave, "hex");
  iv = Buffer.from(datos.iv, "hex");
} else {
  clave = crypto.randomBytes(32);
  iv = crypto.randomBytes(16);
  fs.writeFileSync(rutaClave, JSON.stringify({
    clave: clave.toString("hex"),
    iv: iv.toString("hex")
  }));
}

// Función para cifrar mensajes
function cifrar(mensaje) {
  const cipher = crypto.createCipheriv("aes-256-cbc", clave, iv);
  let cifrado = cipher.update(mensaje, "utf-8", "hex");
  cifrado += cipher.final("hex");
  return cifrado;
}

// Función para descifrar mensajes
function descifrar(cifrado) {
  const decipher = crypto.createDecipheriv("aes-256-cbc", clave, iv);
  let mensaje = decipher.update(cifrado, "hex", "utf-8");
  mensaje += decipher.final("utf-8");
  return mensaje;
}

// Guardar mensaje cifrado
function guardarMensaje(mensajeCifrado) {
  const mensajes = JSON.parse(fs.readFileSync(rutaMensajes, "utf-8"));
  mensajes.push({ mensajeCifrado, fecha: new Date().toISOString() });
  fs.writeFileSync(rutaMensajes, JSON.stringify(mensajes, null, 2));
}

// Menú interactivo
while (true) {
  const opcion = readlineSync.question(
    "Que deseas hacer? (1. Cifrar mensaje, 2. Descifrar mensaje, 3. Salir): "
  );

  if (opcion === "1") {
    const mensaje = readlineSync.question("Mensaje a cifrar: ");
    const mensajeCifrado = cifrar(mensaje);
    guardarMensaje(mensajeCifrado);
    console.log("Mensaje cifrado:", mensajeCifrado);
  } else if (opcion === "2") {
    const cifrado = readlineSync.question("Mensaje cifrado: ");
    try {
      const mensajeDescifrado = descifrar(cifrado);
      console.log("Mensaje descifrado:", mensajeDescifrado);
    } catch (err) {
      console.log("❌ Error al descifrar. Asegurate de usar un mensaje valido.");
    }
  } else if (opcion === "3") {
    break;
  } else {
    console.log("Opcion no valida");
  }
}
