// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.

function waitSeconds(segundos) {
    return new Promise(resolve => setTimeout(resolve, segundos));
}

async function proceso1() {
    console.log("Inicio del proceso..");

    await waitSeconds(3000);
    console.log("Proceso despues de 3 segundos");
    console.log("Tiempo finalizado");
}

proceso1();