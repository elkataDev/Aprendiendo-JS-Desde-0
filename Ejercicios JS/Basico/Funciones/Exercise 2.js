// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos

function numMayor(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido tiene que ser un array"
    }
    if (!arreglo.every(num => Number.isInteger(num))) {
        throw new Error("El array tiene que ser de numeros enteros");
    }
    if (arreglo.length === 0) {
        throw new Error("El array no puede estar vacío");
    }
    return Math.max(...arreglo);
}

let arregloNumeros = [1, 2, 3, 4, 123, 3, 2, 14];
console.log(numMayor(arregloNumeros));