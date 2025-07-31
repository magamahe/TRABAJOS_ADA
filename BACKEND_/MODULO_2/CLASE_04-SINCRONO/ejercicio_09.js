const { cargar } = require('./utils');

const metas = cargar('metas.json') || [];
const completas = metas.filter(m => m.estado === "completa");
console.log("✅ Metas completas:", completas);
