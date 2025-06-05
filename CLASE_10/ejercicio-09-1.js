// CALCULA EL IMC Y DICE SI TIENE SOBREPESO, OBESIDAD, ETC.

const prompt = require('prompt-sync')();

let peso = parseFloat(prompt("Ingrese su peso en kg: "));
let altura = parseFloat(prompt("Ingrese su altura en metros: "));

if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    console.log("⚠️ Error: Por favor ingrese valores numéricos válidos para peso y altura.");
} else {
    let imc = peso / (altura * altura);
    console.log("----------");
    console.log(`Su peso es: ${peso} kg`);
    console.log(`Su altura es: ${altura} m`);
    console.log(`Su Índice de Masa Corporal (IMC) es: ${imc.toFixed(1)}`);

    // Clasificación según la OMS
    if (imc < 18.5) {
        console.log("Clasificación: Tenes Bajo peso");
    } else if (imc >= 18.5 && imc < 24.9) {
        console.log("Clasificación: Tenes Peso normal");
    } else if (imc >= 25 && imc < 29.9) {
        console.log("Clasificación: Tenes Sobrepeso");
    } else if (imc >= 30 && imc < 34.9) {
        console.log("Clasificación: Tenes Obesidad grado 1");
    } else if (imc >= 35 && imc < 39.9) {
        console.log("Clasificación: Tenes Obesidad grado 2");
    } else {
        console.log("Clasificación: Tenes Obesidad grado 3 (obesidad mórbida)");
    }
}
