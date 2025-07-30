// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.

function task1(callback) {
    setTimeout(() => { console.log("Ejecutandose Tarea 1"); callback(); }, 1000);
}
function task2(callback) {
    setTimeout(() => { console.log("Ejecutandose Tarea 2"); callback(); }, 1000);
}
function task3(callback) {
    setTimeout(() => { console.log("Ejecutandose Tarea 3"); callback(); }, 1000);
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todas las tareas han sido completadas");
        });
    });
});
