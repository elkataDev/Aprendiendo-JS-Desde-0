/* 9. Crea una función que verifique si un objeto tiene una 
propiedad específica y lance una excepción personalizada */

//Excepción personalizada
class PropiedadNoEncontradaError extends Error {
    constructor(propiedad) {
        super("La propiedad " + propiedad + "no existe en el objeto");
        this.name = "PropiedadNoEncontradaError";
    }
}

// Función que verifica la existencia de una propiedad
function verificarPropiedad(persona, propiedad) {
    if (!persona.hasOwnProperty(propiedad)) {
        throw new PropiedadNoEncontradaError(propiedad);
    }
    console.log("La propiedad " + propiedad + " existe con valor: " + persona[propiedad]);
}

// Ejemplo de uso
const persona = {
    nombre: "Lucía",
    edad: 30
};

try {
    verificarPropiedad(persona, "edad");      // Propiedad existente
    verificarPropiedad(persona, "altura"); // Propiedad inexistente
} catch (error) {
    if (error instanceof PropiedadNoEncontradaError) {
        console.error("Error de propiedad:", error.message);
    } else {
        console.error("Otro error:", error.message);
    }
}
