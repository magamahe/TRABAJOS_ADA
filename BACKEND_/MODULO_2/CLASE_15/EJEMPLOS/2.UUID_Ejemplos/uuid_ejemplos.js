// Paso 1: Importamos las versiones de uuid que vamos a usar
// Actualmente la biblioteca UUID no tiene soporte con CommonJS, por lo que hacer la importacion de esta forma no es posible:
// const { v1: uuidv1, v3: uuidv3, v4: uuidv4, v5: uuidv5 } = require('uuid');
// Por defecto, nuestros archivos estan configurados en CJS, para cambiarlo debemos dirigirnos a nuestro archivo package.json,
// y en el mismo poner "type": "module" -> esto indicará que a partir de ahí trabajaremos con ESM
// Una vez que está configurado de esta forma, todas las importaciones que hagamos deberan ser con este formato:
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from 'uuid';

// Ejemplo 1: UUID V1 - Basado en tiempo
// Genera un uuid unico basado en la marca del tiempo y la direccion mac
const idv1 = uuidv1();
console.log("UUID v1 (basado en tiempo):", idv1);

// Ejemplo 2: UUID V3 - Basada en nombre y espacio de nombre
// utiliza un nombre y un espacio de nombre para generar uuids
// usando un hash MD5 
const NAMESPACE = uuidv3.URL; // Espacio de nombres estandar basado en url
const namev3 = "ejemploNombre";
const idv3 = uuidv3(namev3, NAMESPACE);
console.log("UUID V3 (Basado en nombre y espacion de nombre):", idv3);

// Ejemplo 3: UUID V4 - Aleatorio
// genera un uuid aleatorio utilizando valores generados de manera random
const idv4 = uuidv4();
console.log("UUID V4 (Aleatoria):", idv4);

// Ejemplo 4: UUID V5 - Espacio de nombre y nombre (SHA-1)
// Similar a la v3 pero usa sha-1
const namev5 = "OtroEjemplo";
const idv5 = uuidv5(namev5, NAMESPACE);
console.log("UUID V5 (Basada en nombre y espacio de nombre con sha-1):", idv5);