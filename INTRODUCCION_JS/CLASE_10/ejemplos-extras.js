// SINTAXIS
    ///////////////////////////////////////////////////
// //condición ? valorSiEsVerdadero : valorSiEsFalso;//
   ///////////////////////////////////////////////////
// Dado un número, muestra "Positivo" o "Negativo"
let num = -5;
//let resultado = ???;
let resultado = num>=0 ?"positivo" : "negativo"
console.log(resultado); // "Negativo"
console.log("----------------------");

// Si la edad es mayor o igual a 18, imprimir "Adulto", si no "Menor"
let edad = 21;
//let tipo = ???;
let tipo = (edad >= 18) ? "Adulto" : "Menor"; 
console.log(tipo); // "Adulto"
console.log("----------------------");

// Si el número es par, imprimir "Par", si no "Impar"
let numero = 7;
//let mensaje = ???;
let mensaje = (numero%2==0) ? "es Par" : "Es impar";
console.log(mensaje); // "Impar"
console.log("----------------------");

// Si tiene clave correcta, imprimir "Acceso permitido", si no "Denegado"
let claveCorrecta = false;
//let acceso = ???;
let acceso = (claveCorrecta) ? "Acceso permitido" : "Denegado";
console.log(acceso); // "Denegado"
console.log("----------------------");

//////////////////////////////////////////////////
//Completar

let hora = 10;
//let saludo = // si la hora es < 12, "Buenos días", si no "Buenas tardes"
let saludo = (hora < 12) ? "Buenos días": "Buenas tardes";
console.log(saludo); // "Buenos días"
console.log("----------------------");

let nota = 8;
//let estado = // si nota >= 6, "Aprobado", si no "Reprobado"
let estado = (nota >= 6) ? "Aprobado": "Reprobado";
console.log(estado); // "Aprobado"
console.log("----------------------");  

let tieneDinero = true;
//let puedeComprar = // si tieneDinero es true, "Sí puede", si no "No puede"
let puedeComprar = (tieneDinero)?"Sí puede":"No puede";
console.log(puedeComprar); // "Sí puede"
console.log("----------------------");

//////////////////////////////////Mini-desafíos
//Comparar dos números
let a = 15, b = 20;
//let mayor = ???; // "a es mayor", "b es mayor" o "son iguales"
let mayor = (a >b) ? "a es mayor que b" : (b > a) ? "b es mayor que a" : "son iguales";
console.log(mayor); // "b es mayor"
console.log("----------------------");

//Es divisible por 3
let x = 9;
//let divisible = ???; // "Sí" si es divisible por 3, si no "No"
let divisible = (x/3) ? "Sí" : "No";
console.log(divisible); // "Sí"
console.log("----------------------");

//Nombre de usuario válido
let usuario = "";
//let valido = ???; // "Válido" si el nombre no está vacío, si no "Inválido"
let valido = (usuario !== null) ? "Válido" : "Inválido";
console.log(valido); // "Inválido"
console.log("----------------------");

// Puede entrar al cine
let edad_personal = 18;
let tiene_entrada = false;
let puede_entrar = (edad_personal >= 18 && tiene_entrada) ? "Puede entrar" : "No puede entrar";
console.log(puede_entrar); // "No puede entrar"
console.log("----------------------");

//Acceso denegado por bloqueo
// Si NO está bloqueado y tiene clave correcta => Acceso permitido
let estaBloqueado = true;
let clave_Correcta = true;
let acceso_si = (!estaBloqueado && clave_Correcta) ? "Acceso permitido" : "Acceso denegado";
console.log(acceso_si); // "Acceso denegado"
console.log("----------------------");

////ANIDADO///////
////////////////////////////////////////////////////////
//condición1 ? valor1 : condición2 ? valor2 : valor3;//
///////////////////////////////////////////////////////

// Clasificación por nota
let nota1 = 9;
let rdo = nota1 >= 9 ? "Excelente" : nota1 >= 6 ? "Aprobado" : "Reprobado";
console.log(rdo); // "Excelente"
console.log("----------------------");

//Semáforo
let color = "amarillo";
let accion = color === "rojo" ? "Detente" : color === "amarillo" ? "Precaución" : "Avanza";
console.log(accion); // "Precaución"
console.log("----------------------");

//Permiso especial
let p1 = 8;
let p2 = 9;
let p3 = 5;

// Si (a == 8 && b > 7) || c == 9 → "Permiso concedido", si no → "Permiso denegado"
//let permiso = ???;
let permiso = (p1 == 8 && p2 > 7) || p3 == 9 ? "Permiso concedido" : "Permiso denegado";
console.log(permiso); // "Permiso concedido"
console.log("----------------------");

//Validación de acceso
let usuarios = "admin";
let clave = "1234";
let esta_Bloqueado = false;

// Si usuario es "admin" Y clave es "1234" Y NO está bloqueado → "Acceso correcto", si no → "Acceso denegado"
//let acceso = ???;
let accesos = (usuarios === "admin" && clave === "1234" && !esta_Bloqueado) ? "Acceso correcto" : "Acceso denegado";
console.log(acceso); // "Acceso correcto"
console.log("----------------------");

//Resultado de sensor
let temperatura = 22;
let humedad = 80;

// Si temperatura está entre 20 y 25 Y humedad > 75 → "Condición ideal"
// Si solo uno de esos se cumple → "Condición regular"
// Si ninguno → "Condición mala"
//let estado = ???;
let estado1 = (temperatura >= 20 && temperatura <= 25 && humedad > 75) ? "Condición ideal" :
              (temperatura < 20 || temperatura > 25 || humedad <= 75) ? "Condición regular" : "Condición mala"; 
console.log(estado1); // "Condición ideal"
console.log("----------------------");

//Lógica mixta
let aa = 5, bb = 10, cc = 3;

// Si a + b > 12 Y c < 5 → "A"
// Si solo una de esas condiciones → "B"
// Si ninguna → "C"
//let resultado = ???;
let resultado2 = ((aa + bb) > 12) && (cc < 5 )? "A" : ((aa + bb) > 12) || (cc < 5 )? "B" : "C";
console.log(resultado2); // "A"
console.log("----------------------");

// Validación compuesta
let edad1 = 17;
let tienePermiso = true;
let entradaVIP = false;

// Si edad >= 18 o (edad >= 16 y tienePermiso) o entradaVIP → "Puede entrar"
// Si no → "No puede entrar"
//let acceso1 = ???;
let acceso2 = (edad1 >=18) || (edad >= 16 && tienePermiso) || entradaVIP ? "Puede entrar" : "no puede entrar";
console.log(acceso2); // "Puede entrar"
console.log("----------------------");

//Evaluador climático
let temp = 30;
let hum = 60;
let viento = 10;

// Reglas:
// Si temp > 35 || (temp > 30 && humedad > 70) → "Calor extremo"
// Si temp entre 25 y 35 Y viento < 15 → "Calor moderado"
// Si temp < 25 → "Clima fresco"
// Otro caso → "Clima variable"

//let clima = ???;
let clima = (temp > 35) || (temp > 30 && hum > 70 )? "calor extremo" : (temp > 25 && temp < 35 && viento <15) ? "calor moderado" : (temp < 25) ? "clima fresco" : "clima variable";
console.log(clima); // "Calor moderado"
console.log("----------------------");


//Sistema de advertencia
let bateria = 15;
let wifi = false;
let modoAhorro = true;

// Reglas:
// Si batería < 10 Y sin wifi → "Advertencia crítica"
// Si batería < 20 Y no modoAhorro → "Activar ahorro"
// Si todo está bien → "Funcionando"
// Si solo sin wifi → "Sin conexión"

//let estado = ???;
let estado3 = (bateria <10 && wifi === false) ? "Advertencia crítica" : (bateria < 20 && modoAhorro === false) ? "Activar ahorro" : (bateria >= 20 && wifi === true && modoAhorro === true) ? "Funcionando" : (wifi === false) ? "Sin conexión" : "Estado desconocido";
console.log(estado3); // "Activar ahorro"
