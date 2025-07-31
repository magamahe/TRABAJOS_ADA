const { cargar } = require('./utils');

const metas = cargar('metas.json') || [];
console.log(`📈 Tenés ${metas.length} metas.`);
