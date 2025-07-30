// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección

let numeros = [1,[ 2, [3, [4, [5, [6, [7, [8, [9, [10]]]]]]]]]];

let flatNumeros = numeros.flat(1);
console.log(flatNumeros);

flatNumeros = numeros.flat(2);
console.log(flatNumeros);

flatNumeros = numeros.flat(3);
console.log(flatNumeros);

flatNumeros = numeros.flat(4);
console.log(flatNumeros);

flatNumeros = numeros.flat(5);
console.log(flatNumeros);

flatNumeros = numeros.flat(6);
console.log(flatNumeros);

flatNumeros = numeros.flat(7);
console.log(flatNumeros);

flatNumeros = numeros.flat(8);
console.log(flatNumeros);

flatNumeros = numeros.flat(9);
console.log(flatNumeros);


//Aplano el array y multiplico cada elemento por 2
const numerosFlatMap = [[1, 2], [3, 4], [5]];
const resultado = numerosFlatMap.flatMap(element => element.map(n => n * 2));

console.log(`uso flatMap(): ${resultado}`); // [2, 4, 6, 8, 10]



