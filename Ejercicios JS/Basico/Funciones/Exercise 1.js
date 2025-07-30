// 1. Crea una función que reciba dos números y devuelva su suma

function suma(a = 0, b = 0) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "Los parametros introducidos tienen que ser numeros enteros";
    }
    return a + b;
}

console.log(suma()); //0
console.log(suma(undefined, 6)); //6
console.log(suma(5, 6)); //11