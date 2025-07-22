/* Ejercicio 8: Funcion backEnd() 
Creá la función backEnd() que recibirá 2 números como parámetros. La 
función deberá imprimir por pantalla los números del 1 al 100, pero teniendo 
en cuenta los siguientes criterios: 
✔ Si el número a imprimir es múltiplo del primer parámetro que se 
ingresó, deberá mostrar el string “Back” en lugar del número. 
✔ Si el número a imprimir es múltiplo del segundo parámetro ingresado, 
deberá mostrar el string “End” en su lugar del número. 
✔ Si el número a imprimir es múltiplo de ambos parámetros, deberá 
mostrar el string “Back End” en lugar del número. */


//// sin objeto

function backEnd(n1, n2){
    const a =[];
    for (let i = 1; i <= 100; i++){
       
        ((i % n1 == 0) && (i % n2 == 0))
        ? a.push("Back End")
        : (i % n1 == 0)
        ?    a.push("Back")
        : (i % n2 == 0)
        ?    a.push("End")
        : a.push(i)
    }

    return a;

}

console.log(backEnd(2,3))


////
