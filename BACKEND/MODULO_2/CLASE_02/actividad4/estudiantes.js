/* 2. En estudiantes.js:
- Crea un array de objetos que represente una lista de estudiantes.
- Cada estudiante debe tener las propiedades: nombre, edad, curso y notas (un array de números).
- Exporta este array usando module.exports. */
const estudiantes = [
    {
        nombre: 'Maria',
        edad: 20,
        curso: 'FRONTEND',
        notas: [7,8,10]
    },
    {
        nombre: 'Pedro',
        edad: 21,
        curso: 'FRONTEND',
        notas: [8,8,9]
    },
    {
        nombre: 'Manuela',
        edad: 20,
        curso: 'BACKEND',
        notas: [7,7,9]
    },
    {
        nombre: 'Martin',
        edad: 22,
        curso: 'BACKEND',
        notas: [8,10,10]
    }
]
module.exports = estudiantes;