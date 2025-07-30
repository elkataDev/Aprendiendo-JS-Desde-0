// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
// 6. Itera los resultados del ejercicio anterior

let setNumeros = new Set([1, 2, 3, 4, 5]);
let setNumeros2 = new Set([4, 5, 6, 7, 8, 9]);

//union (Los set no admiten duplicados)
const union = new Set([...setNumeros, ...setNumeros2]);
console.log(union);

// Intersección: elementos que están en ambos conjuntos (setNumeros y setNumeros2)
const intersección = new Set([...setNumeros].filter(element => setNumeros2.has(element)));
console.log(intersección);

// Diferencia: elementos que están en setNumeros pero no en setNumeros2
const diferencia = new Set([...setNumeros].filter(element => !setNumeros2.has(element)));
console.log(diferencia);

//Itero los resultados (Ejercicio 6)
console.log("Iteros los resultados");

console.log("Unión:");
union.forEach(element => console.log(element));

console.log("Intersección:");
intersección.forEach(element => console.log(element));

console.log("Diferencia:");
diferencia.forEach(element => console.log(element));