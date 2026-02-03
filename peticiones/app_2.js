// Parte 2: Creación de información (POST)

// Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un usuario existente.
const crearPublicacion = async () => {
    let nuevaPublicacion = {
        userId: 1,
        title: "Nueva publicación con POST",
        body: "UNA NUEVA TAREA SE HA AGREGADO A LA LISTA DE TAREAS."
    };
    
    let respuesta = await fetch('http://localhost:3000/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevaPublicacion)
    });
    
    let datos = await respuesta.json();
    console.log('=== SOLICITUD 4: Crear nueva publicación ===');
    console.log(datos);
};

// Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con una publicación.
const crearComentario = async () => {
    let nuevoComentario = {
        postId: 12,
        name: "Nuevo comentario",
        body: "UNA SEGUNDA NUEVA TAREA SE HA AGREGADO A LA LISTA DE TAREAS."
    };
    
    let respuesta = await fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(nuevoComentario)
    });
    
    let datos = await respuesta.json();
    console.log('=== SOLICITUD 5: Crear nuevo comentario ===');
    console.log(datos);
};

// Ejecutar las solicitudes
const ejecutarSolicitudes = async () => {
    await crearPublicacion();
    await crearComentario();
};

ejecutarSolicitudes();