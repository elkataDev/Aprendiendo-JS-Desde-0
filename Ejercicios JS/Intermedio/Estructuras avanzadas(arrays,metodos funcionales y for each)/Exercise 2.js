// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let numerosCubo = numeros.map(element => Math.pow(element, 3));
console.log(`Numeros al cubo: ${numerosCubo}`);

let numerosPares = numerosCubo.filter(element => element % 2 === 0);
console.log(`Numeros pares: ${numerosPares}`);
