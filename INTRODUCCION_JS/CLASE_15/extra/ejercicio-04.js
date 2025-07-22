/* 
Dado un array de correos ["juan@gmail.com", "maria", "sofia@hotmail.com", "admin@"], 
mostrar cuáles son válidos (deben contener "@" y ".").
*/
const correos = ["juan@gmail.com", "maria", "sofia@hotmail.com", "admin@", "pepe.gmail.com"];

const correosValidos = correos.filter(correo => {
  return correo.includes("@") && correo.includes(".");
});

// Mostrar resultados
console.log("Correos válidos:");
correosValidos.forEach(correo => {
  console.log(`- ${correo}`);
});
