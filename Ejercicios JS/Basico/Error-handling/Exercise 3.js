// 3. Lanza una excepción genérica

let num1 = 2;
let num2 = 4.889;

function sumaEnteros(n1, n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        throw new Error("Los parametros introducidos tienen que ser numeros enteros"); //Excepcion personalizada
    }
    return n1 + n2;
}

sumaEnteros(num1,num2);

