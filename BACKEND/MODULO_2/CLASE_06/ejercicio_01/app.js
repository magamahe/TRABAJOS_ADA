/* Indicaciones:
1. Crea un archivo llamado app.js donde escribirás el código.
2. Usa el paquete dotenv para cargar las variables de entorno desde un archivo .env.
-----  npm install dotenv -----
3. Configura un saludo predeterminado en el archivo .env con la clave GREETING.
4. Si el usuario no proporciona un nombre, el programa debe usar "Invitado" como nombre por defecto.
5. Ejecuta el programa desde la terminal y verifica los diferentes resultados al cambiar las variables de entorno y los argumentos. */


// Carga las variables de entorno
require('dotenv').config(); 

// Obtiene el saludo desde la variable de entorno
const saludo = process.env.GREETING || "Hola";

// Obtiene el nombre desde la línea de comandos
//console.log(process.argv); para ver que los argmentos  0=node, 1=app.js, 2=nombre que pasamos
const nombre = process.argv[2] || "Invitado";

// Muestra el saludo personalizado
console.log(`${saludo}, ${nombre}!`);


