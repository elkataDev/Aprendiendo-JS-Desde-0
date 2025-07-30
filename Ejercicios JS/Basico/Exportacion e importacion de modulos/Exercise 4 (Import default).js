// 8. Importa una función, una constante y una clase por defecto (en caso de que lo permita)
import { perro, pi } from "./Exercise 3 (Export default).js";
import defaultImport from "./Exercise 3 (Export default).js";

console.log(defaultImport(2, 4)); // Muestra: 8 
console.log(pi);
let luna = new perro("buldog", 12);
luna.razaPerro();
luna.pesoPerro();