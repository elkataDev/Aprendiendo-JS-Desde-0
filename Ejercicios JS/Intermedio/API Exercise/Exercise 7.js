// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost(id) {
    try {
        // Construimos dinámicamente la URL con el ID proporcionado
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments/${id}`, {
            method: "DELETE", // Método HTTP DELETE
            headers: {
                "Content-Type": "application/json" // Tipo de contenido JSON
            }
        });

        // Verificamos si la respuesta fue exitosa
        if (response.ok) {
            console.log(`Comentario con ID ${id} eliminado correctamente.`);
        } else {
            console.log(`Fallo al eliminar el comentario con ID ${id}. Código:`, response.status);
        }
    } catch (error) {
        console.log("Error:", error);
    }
}
deletePost(1);