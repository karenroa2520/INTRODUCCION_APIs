
// Parte 5: Análisis y verificación de respuestas


// Esta parte del código sirve para VERIFICAR y ANALIZAR los cambios
// que ocurrieron después de realizar las operaciones anteriores
// (especialmente despues de eliminar un recurso con DELETE)
//
// Objetivos:
// 1. Confirmar que un recurso eliminado ya no existe
// 2. Comparar la estructura de los datos antes y después de las modificaciones


// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado y analice la respuesta obtenida
const verificarRecursoEliminado = async () => {
    // Se realiza una petición GET al recurso que fue eliminado anteriormente
    // La URL apunta al post con ID=1, que fue borrado con DELETE en la solicitud anterior
    // Esto nos permitirá ver qué responde el servidor cuando intentamos acceder a un recurso eliminado
    let respuesta = await fetch('http://localhost:3000/posts/1');
    
    // Se convierte la respuesta del servidor a formato JSON
    // Dependiendo del servidor, puede devolver:
    // - {} (objeto vacío) si el recurso no existe
    // - null si el recurso fue eliminado
    // - Un error 404 (Not Found) si no encuentra el recurso
    let datos = await respuesta.json();
    
    // Se retorna una PROMESA para manejar la respuesta de forma asíncrona
    // Las promesas permiten controlar cuándo termina una operación antes de continuar
    // Esto es importante porque las peticiones HTTP tardan tiempo en completarse
    return new Promise((resolve) => {
        // Variable de control que siempre es true
        // Se usa para verificar que el proceso debe ejecutarse
        // (en este caso siempre se ejecuta, pero podría usarse para validaciones)
        let Proceso = true;
        
        // Se verifica si el proceso esta activo antes de continuar
        // Si Proceso es true, se ejecuta el bloque de codigo
        if (Proceso) {
            // Se imprime un mensaje indicando qué solicitud se esta ejecutando
            // Esto ayuda a identificar qué parte del código se esta ejecutando
            console.log('=== SOLICITUD 9: Verificar recurso eliminado (ID=1) ===');
            
            // Se RESUELVE la promesa devolviendo los datos obtenidos
            // resolve() indica que la operación terminó correctamente
            // Los datos se pasarán al .then() que está esperando esta promesa
            resolve(datos);
        }
    });
};

// Solicitud 10: Realice una solicitud GET general y compare la estructura de la respuesta
const compararEstructuraGeneral = async () => {
    // Se realiza una petición GET para obtener TODOS los posts existentes
    // Esta solicitud nos permite ver la estructura general de los datos
    // y compararla con las respuestas anteriores (antes de las modificaciones)
    let respuesta = await fetch('http://localhost:3000/posts');
    
    // Se convierte la respuesta a formato JSON
    // Esto nos dara un arreglo con todos los posts actuales
    let datos = await respuesta.json();
    
    // Se retorna una PROMESA para manejar la respuesta asíncrona
    return new Promise((resolve) => {
        // Variable de control del proceso
        let Proceso = true;
        
        // Verificacion antes de resolver la promesa
        if (Proceso) {
            // Mensaje indicando que solicitud se esta ejecutando
            console.log('=== SOLICITUD 10: Comparar estructura general de posts ===');
            
            // Se resuelve la promesa con todos los posts obtenidos
            resolve(datos);
        }
    });
};


// Ejecución de las solicitudes con promesas


// Se ejecuta la primera solicitud (verificar recurso eliminado)
// .then() se ejecuta CUANDO la promesa se resuelve correctamente
// El parametro 'datos' contiene lo que se pasó a resolve() en la promesa
verificarRecursoEliminado()
    .then((datos) => {
        // Se imprimen los datos devueltos por el servidor
        // Para el recurso eliminado, esperamos ver:
        // - {} (objeto vacío)
        // - null
        // - o un mensaje de error
        console.log(datos);
        
        // Salto de línea para separar visualmente las dos respuestas
        console.log('\n');
    });

// Se ejecuta la segunda solicitud (obtener todos los posts)
// Esta solicitud se ejecuta INDEPENDIENTEMENTE de la primera
// (no espera a que termine la primera, a menos que se use await)
compararEstructuraGeneral()
    .then((datos) => {
        // Se imprimen todos los posts actuales
        // Podemos comparar esta lista con las respuestas anteriores
        // para ver si el post con ID=1 ya no aparece
        console.log(datos);
    });
