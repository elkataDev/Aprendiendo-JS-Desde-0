// 4. Importa una función

import { suma } from "./Exercise 1 (Export).js";

// 5. Importa una constante

import { nameDev } from "./Exercise 1 (Export).js";

// 6. Importa una clase

import { persona } from "./Exercise 1 (Export).js";

// uso de las importaciones

console.log(suma(4, 5));

console.log("Mi nombre de desarollador Web es: " + nameDev);

let antonio = new persona("Antonio", 24);
antonio.miNombre();
antonio.miEdad();