// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function putPost() {
    try {
        // Datos nuevos para actualizar la publicación
        const updatedPost = {
            userId: 1,
            title: "Post actualizado con PUT",
            body: "Este es el contenido actualizado del post"
        };

        // Hacemos la petición PUT a la publicación con ID 1
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
            method: "PUT", // Usamos PUT para reemplazar el recurso
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedPost)
        });

        // Verificamos si la respuesta fue exitosa
        if (!response.ok) {
            throw new Error(`Error HTTP: ${response.status}`);
        }

        // Convertimos la respuesta a JSON y la mostramos
        const data = await response.json();
        console.log("Recurso actualizado:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

putPost();