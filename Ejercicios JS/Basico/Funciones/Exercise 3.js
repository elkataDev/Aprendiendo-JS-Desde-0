// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene

function numVocales(word) {

    if (!typeof word === String) {
        return "El parametro introducido no es un string";
    }

    let vocales = ["a", "e", "i", "o", "u"];
    let contador = 0;
    for (let i = 0; i < word.length; i++) {
        if (vocales.includes(word.charAt(i).toLowerCase())) {
            contador++;
        }
    }
    return contador;
}
    let palabra = "aguacate";
    console.log(numVocales(palabra));