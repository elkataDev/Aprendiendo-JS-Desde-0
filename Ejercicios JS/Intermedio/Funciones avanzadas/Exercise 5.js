// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
function sumManyTimes(multiplier, ...numbers) {
    const sumaTotal = numbers.reduce((suma, num) => suma + num, 0);//0 es el valor inicial de suma
    return sumaTotal * multiplier;
}
console.log(sumManyTimes(2, 1, 2, 3)); // (1 + 2 + 3) * 2 = 12
console.log(sumManyTimes(5, 10, 20));  // (10 + 20) * 5 = 150

