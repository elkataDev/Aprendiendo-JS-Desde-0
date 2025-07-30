// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve({ id, nombre: "Usuario " + id });
            } else {
                reject("Usuario no encontrado");
            }
        }, 2000);
    });
}

async function buscarUsuario(id) {
    try {
        const usuario = await getUser(id);
        console.log("Usuario encontrado:", usuario);
    } catch (error) {
        console.error("Error:", error);
    }
}

buscarUsuario(3); 
buscarUsuario(5);
