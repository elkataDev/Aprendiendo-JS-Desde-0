// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {
    console.log("Inicio del proceso...");

    await wait(1000);
    console.log("Primera tarera completada");

    await wait(2000);
    console.log("Segunda tarea completada");

    await wait(1500);
    console.log("Tercera tarea completada");

    console.log("Fin del proceso...")
}

process();