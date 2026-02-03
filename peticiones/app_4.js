
// Parte 4: Eliminación de información (DELETE)

// La solicitud DELETE se utiliza para ELIMINAR recursos existentes del servidor
// Una vez eliminado, el recurso ya no estará disponible (a menos que se cree de nuevo)


// Solicitud 8: Eliminar una publicación existente
const peticion1 = () => {
    // Se realiza la petición DELETE al servidor
    // La URL incluye el ID del recurso que queremos eliminar: '/posts/1'
    // Esto indica que queremos eliminar la publicación con ID = 1
    let eliminacion_post = fetch('http://localhost:3000/posts/1', {
        // method: 'DELETE' indica que queremos ELIMINAR un recurso existente
        // DELETE es un método destructivo: borra permanentemente el recurso
        method: 'DELETE',
        
        // Nota: En este caso no se necesita enviar datos en el body
        // porque DELETE solo necesita saber QUÉ recurso eliminar (lo indica la URL)
    });
    
    // Se imprime un mensaje indicando que se ha eliminado la informacion
    // Este mensaje se muestra INMEDIATAMENTE, sin esperar la respuesta del servidor
    // porque no se usa 'await' ni '.then()' para esperar la respuesta
    console.log(`Peticion 1: ESTA INFORMACION HA SIFO ELIMANDA DEL SISTEMA(ID-N=1)`);
};

// Se llama a la función para ejecutar la eliminación
// Sin esta llamada, la función no se ejecutaría
peticion1();

