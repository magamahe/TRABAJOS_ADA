const { guardar } = require('./utils');

const metas = ["Aprender Node.js", "Viajar a Japón"];
guardar('metas.json', metas);
console.log("📌 Metas guardadas en metas.json.");
