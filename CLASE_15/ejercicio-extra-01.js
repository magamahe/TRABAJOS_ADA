/* Ejercicios Extra para seguir practicando: 
● Gestión de inventario de una tienda 
Eres encargado de una tienda y tienes un inventario inicial de productos. La 
lista de productos es: 
let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
Debes realizar las siguientes acciones: 
1. Agregar un nuevo producto "Impresora" al inventario usando el 
método adecuado. 
2. Comprobar si "Tablet" está en el inventario y mostrar un mensaje 
adecuado. 
3. Eliminar el primer producto del inventario. 
4. Mostrar la lista actualizada de productos en una sola cadena, 
separados por comas.  */

let inventario = ["Laptop", "Teclado", "Mouse", "Monitor"]; 
console.log(`Inventario original: ${inventario.join(", ")}`);
console.log("--------------------------");

// 1. Agregar
inventario.push("Impresora");
console.log(`Se agrega "Impresora" al inventario: ${inventario.join(", ")}`);
console.log("--------------------------");

// 2. Verificar si "Tablet" está
const buscarElem = "Tablet";
console.log(
  inventario.includes(buscarElem)
    ? `El producto "${buscarElem}" se encuentra en el inventario.`
    : `El producto "${buscarElem}" no se encuentra en el inventario.`
);
console.log("--------------------------");

// 3. Eliminar el primer producto
const eliminado = inventario.shift();
console.log(`Se elimina el primer producto: "${eliminado}"`);
console.log("--------------------------");

// 4. Mostrar inventario actualizado
console.log(`Inventario actualizado: ${inventario.join(", ")}`);
