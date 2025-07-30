// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM

const deleteParagraph = document.getElementById("deleteParagraph");
const boton = document.getElementById("boton");

boton.addEventListener("click", () => {
  deleteParagraph.remove();
});
