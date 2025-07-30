// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente

const boton = document.getElementById("backgroundBtn");

boton.addEventListener("click", () => {
  document.body.style.backgroundColor = "skyblue";
});