/* ## 🔸 Ejercicio 10: Formateá mensajes personalizados
Dado:

const usuarios = [
  { nombre: 'Clara', edad: 22 },
  { nombre: 'Miguel', edad: 35 }
];

Generá un array de strings como:  
- `"Hola Clara, tenés 22 años"`  
- `"Hola Miguel, tenés 35 años"`
 */

const usuarios = [
  { nombre: 'Clara', edad: 22 },
  { nombre: 'Miguel', edad: 35 }
];

const saludo = usuarios.map(usuario => `Hola ${usuario.nombre}, tenes ${usuario.edad} años`);

saludo.forEach(mensaje => console.log(mensaje));
