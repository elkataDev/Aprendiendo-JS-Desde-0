// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores

const valores = ["12.5", "abc", "45", null, "3.14.15"];

valores.forEach((valor, i) => {
    try {
        let resultado = parseFloat(valor);
        if (isNaN(resultado)) throw new Error("No se puede convertir " + valores[i] + " a float");
        console.log("Valor " + valores[i] + ": ", resultado);
    } catch (error) {
        console.error("Error en valor " + i + ":", error.message);
    }
});
