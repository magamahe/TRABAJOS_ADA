/* Ejercicio 7: Mensaje según la hora 
Declara una variable global llamada horaActual (puedes asignarle un valor 
f ijo). Crea una función declarada llamada mostrarSaludo que imprima 
"Buenos días" si la hora es menor a 12, "Buenas tardes" si es menor a 18, o 
"Buenas noches" en cualquier otro caso.  */

// Variable global con hora fija
const horaActual = 15;

function mostrarSaludo() {
  (horaActual < 12) ? console.log("Buenos días") :
  (horaActual < 18) ? console.log("Buenas tardes") :
  console.log("Buenas noches");
}

// Ejecutar la función
mostrarSaludo();

