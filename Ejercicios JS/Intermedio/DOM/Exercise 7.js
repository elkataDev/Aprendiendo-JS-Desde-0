// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"

const div = document.getElementById("content");

const nuevoH2 = document.createElement("h2");
nuevoH2.textContent = "Nuevo Contenido";
div.innerHTML = ""; // borra contenido anterior
div.appendChild(nuevoH2);


//usar innerHTML lo cambia directamente
//div.innerHTML = "<h2>Nuevo Contenido</h2>";