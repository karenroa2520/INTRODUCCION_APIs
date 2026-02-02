//Parte 2: Creación de información (POST)
//• Solicitud 4: Realice una solicitud POST para crear una nueva publicación asociada a un usuario existente.
//Incluya información como título y contenido.
//• Solicitud 5: Realice una solicitud POST para registrar un nuevo comentario relacionado con una publicación.

// script-post.js

// Solicitud 4: Crear una nueva publicación
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
    return datos;
};

// Solicitud 5: Crear un nuevo comentario
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
    return datos;
};

// Ejecutar las solicitudes
const ejecutarSolicitudes = async () => {
    
    console.log('=== SOLICITUD 4: Crear nueva publicación ===');
    let publicacion = await crearPublicacion();
    console.log(publicacion);
    console.log('\n');
    
    console.log('=== SOLICITUD 5: Crear nuevo comentario ===');
    let comentario = await crearComentario();
    console.log(comentario);
};

ejecutarSolicitudes();