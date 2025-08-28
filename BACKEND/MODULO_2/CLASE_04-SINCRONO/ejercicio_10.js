const { copiarArchivo } = require('./utils');

copiarArchivo('metas.json', 'respaldo_metas.json');
console.log("💾 Copia de seguridad creada como respaldo_metas.json");
