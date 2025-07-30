// 4. Crea excepciones personalizadas
class ParametrosNoEnterosError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ParametrosNoEnterosError";
    }
}

class ValoresNegativosError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ValoresNegativosError";
    }
}

class ParametrosNoNumericosError extends Error {
    constructor(mensaje) {
        super(mensaje);
        this.name = "ParametrosNoNumericosError";
    }
}

let num1 = 2;
let num2 = -5; // valor negativo
let num3 = 3.45454 //valor decimal
let num4 = "no soy un numero" //valor no numerico

// 5. Lanza una excepción personalizada
// 6. Lanza varias excepciones según una lógica definida
function sumaEnteros(n1, n2) {
    if (typeof n1 !== "number" || typeof n2 !== "number") {
        throw new ParametrosNoNumericosError("Los parámetros deben ser de tipo número");
    }

    if (!Number.isInteger(n1) || !Number.isInteger(n2)) {
        throw new ParametrosNoEnterosError("Los parámetros introducidos tienen que ser números enteros");
    }

    if (n1 < 0 || n2 < 0) {
        throw new ValoresNegativosError("Los parámetros no pueden ser negativos");
    }

    return n1 + n2;
}

// 7. Captura varias excepciones en un mismo try-catch
try {
    let resultado = sumaEnteros(num1, num2);
    console.log("Resultado:", resultado);
} catch (error) {
    if (error instanceof ParametrosNoNumericosError) {
        console.error("Error de tipo:", error.message);
    } else if (error instanceof ParametrosNoEnterosError) {
        console.error("Error de enteros:", error.message);
    } else if (error instanceof ValoresNegativosError) {
        console.error("Error de valores negativos:", error.message);
    } else {
        console.error("Error desconocido:", error.message);
    }
}
