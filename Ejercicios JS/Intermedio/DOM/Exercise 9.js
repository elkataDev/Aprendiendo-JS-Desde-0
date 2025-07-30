// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe

const input = document.getElementById("textInput");
const result = document.getElementById("result");

input.addEventListener("input", () => {
  result.textContent = input.value;
});