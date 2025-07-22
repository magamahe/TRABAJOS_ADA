/*  Ejercicio 4: Validar contraseña fuerte */

// Verificá si una contraseña tiene al menos 8 caracteres, una mayúscula y un número.
const prompt = require("prompt-sync")();

const contrasena = prompt ("Ingrese su contraseña:");

function esContraseniaSegura(password) {
  const tieneLongitud = password.length >= 8;
  const tieneMayuscula = /[A-Z]/.test(password);
  const tieneNumero = /[0-9]/.test(password);

  return tieneLongitud && tieneMayuscula && tieneNumero;
}


if (esContraseniaSegura(contrasena)) {
  console.log("Contraseña segura ✅");
} else {
  console.log("Contraseña débil ❌ (mínimo 8 letras, 1 mayúscula y 1 número)");
}

