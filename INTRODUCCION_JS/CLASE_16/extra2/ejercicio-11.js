/*  Validar fecha (formato dd/mm/yyyy)
Crear una función que valide que una cadena tenga el formato correcto de fecha. */

function validarFecha(fecha) {
  // Expresión regular para formato dd/mm/yyyy
  const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
  const match = fecha.match(regex);

  if (!match) return false; // No cumple formato básico

  const dia = parseInt(match[1], 10);
  const mes = parseInt(match[2], 10);
  const anio = parseInt(match[3], 10);

  // Validar rangos
  if (mes < 1 || mes > 12) return false;
  if (dia < 1) return false;

  // Días máximos por mes (sin considerar años bisiestos)
  const diasPorMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  // Ajuste para febrero en año bisiesto
  const esBisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
  if (esBisiesto && mes === 2) {
    if (dia > 29) return false;
  } else {
    if (dia > diasPorMes[mes - 1]) return false;
  }

  return true;
}

console.log(validarFecha("12-02-2024"));


console.log(validarFecha("12/02/2024"));