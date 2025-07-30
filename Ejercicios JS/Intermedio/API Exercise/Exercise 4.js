// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {
    try {
        // Definimos el nuevo post que queremos enviar
        const newPost = {
            userId: 1,                          // ID del usuario autor del post
            title: "Mi primer POST en una API", // Título del post
            body: "Este es el cuerpo de mi Post" // Contenido del post
        };

        // Realizamos la petición POST a la API
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // Indicamos que el método es POST
            headers: {
                "Content-Type": "application/json" // Indicamos que los datos se envían como JSON
            },
            body: JSON.stringify(newPost) // Convertimos el objeto a JSON antes de enviarlo
        });

        // Verificamos si la respuesta fue exitosa (status 200–299)
        if (!response.ok) {
            // Si no fue exitosa, lanzamos un error con el código de estado
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Si la respuesta fue correcta, la convertimos a JSON
        const data = await response.json();

        // Mostramos el resultado en la consola
        console.log(data);
    } catch (error) {
        // Capturamos y mostramos cualquier error que ocurra durante la petición
        console.log("Error:", error);
    }
}
createPost();