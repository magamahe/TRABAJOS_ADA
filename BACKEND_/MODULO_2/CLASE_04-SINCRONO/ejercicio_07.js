const { cargar, guardar } = require('./utils');

let metas = cargar('metas.json') || [];
const meta = "Viajar a Disney;"

if (!metas.includes(meta)) {
  metas.push(meta);
  guardar('metas.json', metas);
  console.log("🧳 Meta 'Viajar a Disney' añadida.");
} else {
  console.log("✅ Ya tenés la meta 'Viajar a Disney'.");
}
