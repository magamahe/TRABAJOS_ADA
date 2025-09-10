# 📚 Clase 14 - Actividades con Node.js (Módulos y Seguridad)

¡Hola Chicas!  
En esta clase trabajaremos con **Node.js** y aprenderemos a usar módulos como **crypto** para cifrado y seguridad, además de practicar la manipulación y ordenación de datos.

---

## 🔑 Temas principales
1. **Cifrado y Descifrado de Datos**  
   - Generación de hash con `SHA-256`.  
   - Encriptación y desencriptación con `AES-256-CBC`.  

2. **Ordenación de Datos**  
   - Uso de `sort()` para organizar listas de números y textos.  

---

## ✨ Actividades

### 📝 Ejercicio 1: Cálculo de Hash Simple
Escribe un script en **Node.js** que use el módulo `crypto` para generar un hash **SHA-256** de un texto ingresado por el usuario.  
Muestra el hash en la consola.  

### 📝 Ejercicio 2: Ordenar una Lista de Números
Crea un script que permita al usuario ingresar una lista de números separados por comas.  
Ordena los números de menor a mayor y muestra la lista ordenada.  


### 📝 Ejercicio 3: Cifrado y Descifrado Básico con crypto
Crea un script en Node.js que permita al usuario ingresar un texto, luego
lo cifre usando el algoritmo **AES-256-CBC** y lo descifre para mostrar el
resultado original. Usa el módulo crypto para el cifrado y descifrado. 

### 📝 Ejercicio 4: Hash de Contraseña con Sal
Crea un script en Node.js que permita al usuario ingresar una contraseña
y un **"sal"** (un valor aleatorio que se usa para añadir seguridad). Luego,
genera un hash de la contraseña combinada con el "sal" usando el
algoritmo **SHA-256**. Muestra el hash generado.

## 🚀 Ejecución
1. Crear un archivo para cada ejercicio:  
   - `ejercicio1.js`  
   - `ejercicio2.js`  
   - `ejercicio3.js`  
   - `ejercicio4.js`  

2. Ejecutar con Node.js:  
```bash
node ejercicio1.js
```

---

💡 **Tip:** El uso de `crypto` y el concepto de *sal* son fundamentales en la seguridad de contraseñas.  
El método `sort()` es muy útil para manipular arreglos de forma rápida.  

---
✨ ¡A practicar!
