// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos

function elementosComunes(arreglo, arreglo2) {
    if (!Array.isArray(arreglo) || !Array.isArray(arreglo2)) {
        return "Los parametros introducidos no son arrays";
    }
    return arreglo.filter(elemento => arreglo2.includes(elemento));
}

// Ejemplo de uso
let a = [1, 2, 3, 4, 5];
let b = [4, 5, 6, 7, 8];

console.log(elementosComunes(a, b)); // [4, 5]