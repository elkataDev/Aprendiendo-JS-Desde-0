// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/posts")
    .then(response => response.json()) // Convierte la respuesta a JSON
    .then(data => {
        console.log(data); // Muestra en consola la lista de publicaciones
    })
    .catch(error => {
        console.log(`Error: ${error}`); // Muestra el error en caso de fallo
    });