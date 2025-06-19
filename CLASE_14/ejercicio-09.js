/* ● Ejercicio 9: Última aparición de un modelo de auto 
En este ejercicio, trabajaremos con una lista de modelos de autos. 
Implementa una función llamada ultimaAparicionModeloAuto(modelo) que 
encuentre y muestre la última posición en la lista donde aparece el modelo 
específico de auto dado por modelo. 
Datos Iniciales: 
✔ Utiliza un array llamado modelosAutos que contiene varios modelos de 
autos, algunos repetidos para demostrar la funcionalidad. 
Funcionalidad: 
✔ Implementa la función ultimaAparicionModeloAuto(modelo), que toma 
modelo como parámetro (un string). 
✔ Debes recorrer el array de manera manual para encontrar la última 
aparición del modelo. 
✔ Si el modelo se encuentra en el array, la función debe imprimir por 
consola la posición (índice + 1) en la que aparece (considerando que la 
numeración es de 1 a N). 
✔ Si el modelo no está en el array, debe imprimir un mensaje indicando que 
el modelo no está presente.  */

/// CON OBJETO y lastIndexOf
const auto = {
    modelosAutos:["fiat", "peugeot", "chevrolet", "bmw", "fiat", "bmw", "chevrolet", "peugeot", "toyota", "toyota"],
    ultimaAparicionModeloAuto: function(modelo){
        const indice = this.modelosAutos.lastIndexOf(modelo);
        (indice == -1)
        ? console.log(`El modelo de automovil ${modelo} no se encuentra presente`)
        : console.log(`El modelo ${modelo} su ultima posicion es: ${indice+1}`)

    }  /// ultima posicion
}
console.log(auto.modelosAutos);
auto.ultimaAparicionModeloAuto("peugeot"); // ya muestra el resultado

auto.ultimaAparicionModeloAuto("toyota"); // ya muestra el resultado
auto.ultimaAparicionModeloAuto("audi"); // ya muestra el resultado