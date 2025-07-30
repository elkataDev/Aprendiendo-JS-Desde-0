// Módulos externos

//const os = require("os") asi se haria si no tuviese el .json

import os from "os";

console.log(os.platform());//Muestra la plataforma del sistema operativo actual
console.log(os.arch());// Muestra la arquitectura del procesador
console.log(os.totalmem());//Muestra la memoria total del sistema, en bytes
console.log(os.freemem());//Muestra la memoria libre actualmente disponible, también en bytes