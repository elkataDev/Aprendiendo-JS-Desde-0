// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario

function esPrimo(num) {
    if (!Number.isInteger(num)) {
        return "El parametro introducido tiene que ser un numero entero";
    }
    if (num <= 1) {
        return false;
    }

    // Verificar divisores desde 2 hasta num - 1
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false; // Tiene un divisor, no es primo
        }
    }

    return true; // No se encontraron divisores, es primo
}

console.log(esPrimo(2));
console.log(esPrimo(56));
