/* Requisitos del programa:
1. Debe mostrar la plataforma del sistema operativo (Linux, macOS o Windows).
2. Debe mostrar el directorio actual desde donde se ejecuta el programa.
3. Usa los métodos process.platform y process.cwd() para obtener esta información.

Indicaciones:
1. Crea un archivo llamado app.js.
2. Escribe un programa que imprima en la consola la plataforma y el directorio actual.
3. Ejecuta el programa desde la terminal y verifica los resultados. */

// Mostrar la plataforma del sistema operativo
console.log("Sistema operativo:", process.platform);

// Mostrar el directorio actual de trabajo
console.log("Directorio actual:", process.cwd());