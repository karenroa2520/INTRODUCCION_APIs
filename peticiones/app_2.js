
// Parte 2: Creación de información (POST)

// Las solicitudes POST se utilizan para ENVIAR datos al servidor
// y crear nuevos recursos (publicaciones, comentarios, etc.)


// Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un usuario existente
const crearPublicacion = async () => {
    // Se define el objeto con los datos de la nueva publicacion
    // userId: ID del usuario que crea la publicación (debe existir en la base de datos)
    // title: Título de la publicación
    // body: Contenido/cuerpo de la publicación
    let nuevaPublicacion = {
        userId: 1,
        title: "Nueva publicación con POST",
        body: "UNA NUEVA TAREA SE HA AGREGADO A LA LISTA DE TAREAS."
    };
    
    // Se realiza la peticion POST al servidor
    // fetch recibe dos parámetros:
    // 1. La URL del endpoint ('http://localhost:3000/posts')
    // 2. Un objeto de configuración con los detalles de la peticion
    let respuesta = await fetch('http://localhost:3000/posts', {
        // method: 'POST' indica que queremos CREAR un nuevo recurso
        method: 'POST',
        
        // headers: Define el tipo de contenido que enviamos al servidor
        // 'Content-Type': 'application/json' indica que los datos están en formato JSON
        headers: {
            'Content-Type': 'application/json'
        },
        
        // body: Contiene los datos que se enviarán al servidor
        // JSON.stringify() convierte el objeto JavaScript a una cadena JSON
        // Esto es necesario porque fetch solo acepta cadenas en el body
        body: JSON.stringify(nuevaPublicacion)
    });
    
    // Se convierte la respuesta del servidor a formato JSON
    // El servidor devuelve el recurso creado con su ID asignado
    let datos = await respuesta.json();
    
    // Se imprime un mensaje indicando qué solicitud se ejecuto
    console.log('=== SOLICITUD 4: Crear nueva publicación ===');
    
    // Se muestran los datos devueltos por el servidor
    // (la publicación creada con su ID y otros campos generados)
    console.log(datos);
};

// Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con una publicacion
const crearComentario = async () => {
    // Se define el objeto con los datos del nuevo comentario
    // postId: ID de la publicación a la que pertenece el comentario
    // name: Nombre o título del comentario
    // body: Contenido del comentario
    let nuevoComentario = {
        postId: 12,
        name: "Nuevo comentario",
        body: "UNA SEGUNDA NUEVA TAREA SE HA AGREGADO A LA LISTA DE TAREAS."
    };
    
    // Se realiza la petición POST para crear el comentario
    let respuesta = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        // Se convierte el objeto a JSON para enviarlo
        body: JSON.stringify(nuevoComentario)
    });
    
    // Se obtiene la respuesta del servidor en formato JSON
    let datos = await respuesta.json();
    
    // Mensaje de la solicitud
    console.log('=== SOLICITUD 5: Crear nuevo comentario ===');
    
    // Se muestran los datos del comentario creado
    console.log(datos);
};

// Ejecución de las solicitudes

// Función que ejecuta ambas solicitudes en orden secuencial
// async indica que la función contiene operaciones asíncronas
const ejecutarSolicitudes = async () => {
    // await hace que el código ESPERE a que crearPublicacion() termine
    // antes de continuar con la siguiente línea
    // Esto garantiza que las solicitudes se ejecuten en orden
    await crearPublicacion();
    
    // Solo después de que la publicación se cree, se ejecuta esta línea
    await crearComentario();
};

// Se llama a la función para iniciar la ejecucion
// Sin esta llamada, el código no se ejecutaría
ejecutarSolicitudes();

