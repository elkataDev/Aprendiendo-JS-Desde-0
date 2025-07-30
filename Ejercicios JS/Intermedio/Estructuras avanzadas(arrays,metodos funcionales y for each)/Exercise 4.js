// 4. Ordena un array de números de mayor a menor

let numeros = [45, 8, 9, 65, 2, 0, 1, 3]; // Array de numeros enteros desordenado

let numerosOrdenados = numeros.sort((element, element2) => element2 - element);
console.log(`Muestro los numeros ordenados: ${numerosOrdenados}`);


//let numerosOrdenados = numeros.sort((element, element2) => element - element2); //menor a mayor
//console.log(`Muestro los numeros ordenados: ${numerosOrdenados}`);

