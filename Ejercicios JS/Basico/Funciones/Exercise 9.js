// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso

function ordenInverso(cadena) {
    if (typeof cadena !== "string") {
        return "El parámetro tiene que ser una cadena de texto";
    }

    return cadena.split(" ").reverse().join(" ");
}


let palabra = "hola soy ElProgramadorNovato1600";
console.log(ordenInverso(palabra));