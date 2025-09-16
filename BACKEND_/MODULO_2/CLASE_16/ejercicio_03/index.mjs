import fs from 'fs';
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import { v4 as uuidv4 } from 'uuid';

// Recordemos que la biblioteca UUID no tiene soporte con CommonJS, es por esto que le damos la extension 'mjs' a nuestro archivo

// Al estar trabajando con EMS, no podemos utilizar variables con scope globales (como lo serían __dirname y __filename)
// Por lo tanto, lo que estamos haciendo aquí es 'recrearlas' manualmente de la siguiente forma:
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ruta al archivo JSON
const rutaUsuarios = path.join(__dirname, 'usuarios.json');

// Función para cargar usuarios
function cargarUsuarios() {
    try {
        const datos = fs.readFileSync(rutaUsuarios, 'utf-8');
        return JSON.parse(datos);
    } catch (error) {
        return [];
    }
}

// Función para guardar usuarios
function guardarUsuarios(usuarios) {
    fs.writeFileSync(rutaUsuarios, JSON.stringify(usuarios, null, 2));
}

// Registrar un nuevo usuario
function registrarUsuario(nombre, email, contraseña) {
    const usuarios = cargarUsuarios();
    const id = uuidv4(); // Generar ID único
    const nuevoUsuario = { id, nombre, email, contraseña };
    usuarios.push(nuevoUsuario);
    guardarUsuarios(usuarios);
    console.log('Usuario registrado con ID:', id);
}

// Iniciar sesión
function iniciarSesion(email, contraseña) {
    const usuarios = cargarUsuarios();
    const usuario = usuarios.find(u => u.email === email && u.contraseña === contraseña);
    if (usuario) {
        console.log('Inicio de sesión exitoso. Bienvenido,', usuario.nombre);
    } else {
        console.log('Credenciales incorrectas.');
    }
}

// Ejemplo de uso
registrarUsuario('Ana', 'ana@example.com', '1234');
iniciarSesion('ana@example.com', '1234');