// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas

function mayúsculas(arregloString) {
    if (!Array.isArray(arregloString)) {
        return "El parametro introducido no es un array";
    }
    if (!arregloString.every(item => typeof item === "string")) {
        throw new Error("El array solo debe contener valores String");
    }
    return arregloString.map(word => word.toUpperCase());
}
// Array de ejemplo
let palabras = ["hola", "mundo", "javascript", "programar"];

// Usar la función
let resultado = mayúsculas(palabras);
console.log(resultado); // ["HOLA", "MUNDO", "JAVASCRIPT", "PROGRAMAR"]
