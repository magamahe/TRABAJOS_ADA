// Ejercicio 3: Calculadora Simple con readline-sync

const readlineSync = require('readline-sync');

// Pedimos los números
const num1 = readlineSync.questionFloat("Ingresa el primer numero: ");
const num2 = readlineSync.questionFloat("Ingresa el segundo numero: ");

// Definimos las operaciones disponibles
const operaciones = ["Suma", "Resta", "Multiplicacion", "Division"];

// Mostramos menú con keyInSelect (incluye opción CANCEL automática)
const indice = readlineSync.keyInSelect(operaciones, "Elige una operacion: ");

let resultado;

switch (indice) {
  case 0: // Suma
    resultado = num1 + num2;
    console.log(`El resultado de la suma es: ${resultado}`);
    break;

  case 1: // Resta
    resultado = num1 - num2;
    console.log(`El resultado de la resta es: ${resultado}`);
    break;

  case 2: // Multiplicación
    resultado = num1 * num2;
    console.log(`El resultado de la multiplicación es: ${resultado}`);
    break;

  case 3: // División
    if (num2 !== 0) {
      resultado = num1 / num2;
      console.log(`El resultado de la division es: ${resultado}`);
    } else {
      console.log("❌ Error: No se puede dividir entre 0.");
    }
    break;

  case -1: // Cancel automático
    console.log("Operacion cancelada.");
    break;
}
