// 1. Crea un array que almacene cinco animales

// 2. Añade dos más. Uno al principio y otro al final

// 3. Elimina el que se encuentra en tercera posición


let arrayAnimales = ["Perro", "Gato", "tortuga", "pez", "canario"];

arrayAnimales.push("suricato"); // Agrego al final (cola)
arrayAnimales.unshift("canguro"); // Agrego al principio (pila)

mostrarArreglo(arrayAnimales);

arrayAnimales.splice(3, 1); //Elimina el animal que se encuentra en la tercera posicion
//arrayAnimales.splice(3, 2); //Elimina dos elementos a partir de la tercera posicion
//arrayAnimales.splice(3, 0,"caballo"); //Agrega uno o varios elementos a partir de la tercera posicion

console.log("************************");
mostrarArreglo(arrayAnimales);


function mostrarArreglo(arreglo) {
    if (!Array.isArray(arreglo)) {
        return "El parametro introducido no es un arreglo"
    }
    for (let i = 0; i < arrayAnimales.length; i++) {
        console.log(arrayAnimales[i]);
    }
}
