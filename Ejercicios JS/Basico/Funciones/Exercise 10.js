// 10. Crea una función que calcule el factorial de un número dado

function factorial(num) {
    if (!Number.isInteger(num) || num < 0) {
        return "El parámetro debe ser un número entero no negativo";
    }

    let resultado = 1;
    for (let i = 2; i <= num; i++) {
        resultado *= i;
    }

    return resultado;
}

// Ejemplos:
console.log(factorial(5)); // 120
console.log(factorial(0)); // 1
console.log(factorial(1)); // 1