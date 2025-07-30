// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado

function elevadoa2(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido";
    }
    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El array debe contener numeros enteros");
    }
    return arreglo.map(num => Math.pow(num, 2));
}

// Ejemplo de uso
let numeros = [1, 2, 3, 4, 5, 6];
console.log(elevadoa2(numeros)); //[ 1, 4, 9, 16, 25, 36 ]