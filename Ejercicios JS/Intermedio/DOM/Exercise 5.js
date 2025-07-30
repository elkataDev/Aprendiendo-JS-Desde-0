// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">

const boton = document.getElementById("boton");

function newElement() {
  const nuevoLi = document.createElement("li");
  nuevoLi.textContent = "Nuevo elemento";
  
  const lista = document.getElementById("list");
  lista.appendChild(nuevoLi);
}

// Asignar el evento correctamente
boton.addEventListener("click", newElement);
