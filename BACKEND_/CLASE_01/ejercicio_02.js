/* Ejercicio 2: El menú del día 🍽️
Escribe una función que reciba un objeto con platos y precios, y devuelva
los platos cuyo precio sea menor a $20.
Consigna:
• Usa un bucle for...in.
• Usa objetos y arrays. */

function platosEconomicos(menu) {
    let platosFiltrados = [];

    for (let plato in menu) {
        if (menu[plato] < 20) {
            platosFiltrados.push(plato);
        }
    }

    return platosFiltrados;
}

// Ejemplo de uso:
const menuDelDia = {
    "Milanesa con papas": 25,
    "Sopa de verduras": 15,
    "Ensalada mixta": 18,
    "Hamburguesa": 22,
    "Tarta de verdura": 12
};

const platosBaratos = platosEconomicos(menuDelDia);
console.log("Platos por menos de $20:", platosBaratos);
