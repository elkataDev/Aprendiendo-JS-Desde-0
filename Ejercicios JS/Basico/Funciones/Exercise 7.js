// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares

function sumaPares(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido";
    }
    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El array debe contener numeros enteros");
    }
    let suma = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] % 2 == 0) {
            suma += arreglo[i];
        }
    }
    return suma;
}

// Ejemplo de uso:
let numeros = [1, 2, 3, 4, 5, 6];
console.log(sumaPares(numeros)); // 12