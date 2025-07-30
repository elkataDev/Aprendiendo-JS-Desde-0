// 7. Crea un mapa que asocie el número del mes a su nombre

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor

// 9. Añade al mapa una clave con un array que almacene los meses de verano

//Creo el mapa
let myMap = new Map([
    ["1", "enero"],
    ["2", "febrero"],
    ["3", "marzo"],
    ["4", "abril"],
    ["5", "mayo"],
    ["6", "junio"],
    ["7", "julio"],
    ["8", "agosto"],
    ["9", "septiembre"],
    ["10", "octubre"],
    ["11", "noviembre"],
    ["12", "diciembre"]])
    
console.log(myMap);


if (myMap.has("5")) {
    console.log("El mes número 5 es:", myMap.get("5"));
} else {
    console.log("El mes número 5 no existe en el mapa.");
}

//Agrego clave "verano" con un array como valor
myMap.set("verano", ["junio", "julio", "agosto"]);

console.log("Meses de verano:", myMap.get("verano"));

console.log(myMap);