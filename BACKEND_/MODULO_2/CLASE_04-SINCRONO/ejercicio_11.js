const { cargar, guardar } = require('./utils');

const nuevoContacto = {
  nombre: "AdaDW",
  telefono: "12345999",
  email: "ada@example.com"
};

let contactos = cargar('contactos.json') || [];

const yaExiste = contactos.find(c => c.nombre === nuevoContacto.nombre);

if (!yaExiste) {
  contactos.push(nuevoContacto);
  guardar('contactos.json', contactos);
  console.log("📇 Contacto agregado.");
} else {
  console.log("⚠️ Ya existe un contacto con ese nombre.");
}
