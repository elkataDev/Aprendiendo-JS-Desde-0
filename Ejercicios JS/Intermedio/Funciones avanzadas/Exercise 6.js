// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función

function sumWithCallback(callback, ...numbers) {
    const total = numbers.reduce((acumulador, num) => acumulador + num, 0);
    callback(total);
}

function mostrarResultado(resultado) {
    console.log("La suma es:", resultado);
}

sumWithCallback(mostrarResultado, 4, 5, 6); // La suma es: 15
