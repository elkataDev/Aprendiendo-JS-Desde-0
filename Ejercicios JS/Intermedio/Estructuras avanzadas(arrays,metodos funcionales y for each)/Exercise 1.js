// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección

let arregloEnteros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let doble = arregloEnteros.map(element => element * 2);
console.log("Multiplo los elementos del array (El .map() me devuelve otro array independiente)")
console.log(doble);


let numerosPares = arregloEnteros.filter(element => element % 2 === 0);
console.log(`Numeros pares: ${numerosPares}`);


let sumaTotal = arregloEnteros.reduce((resultado, element) => resultado + element, 0);
console.log(`Suma total de los elementos del array: ${sumaTotal}`);