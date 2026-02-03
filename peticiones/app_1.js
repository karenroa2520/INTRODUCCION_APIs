// Parte 1: Solicitudes de consulta (GET)

// Solicitud 1: Realice una solicitud GET para obtener la lista completa de usuarios disponibles en el servicio.
const obtenerUsuarios = async () => {
    let respuesta = await fetch('http://localhost:3000/users');
    let datos = await respuesta.json();
    return new Promise((resolve) => {
        let Proceso = true;
        if (Proceso) {
            console.log('=== SOLICITUD 1: Lista de usuarios ===');
            resolve(datos);
        }
    });
};

// Solicitud 2: Realice una solicitud GET para consultar la información de un usuario específico, utilizando su identificador.
const obtenerUsuarioEspecifico = async (id) => {
    let respuesta = await fetch(`http://localhost:3000/users/${id}`);
    let datos = await respuesta.json();
    return new Promise((resolve) => {
        let Proceso = true;
        if (Proceso) {
            console.log('=== SOLICITUD 2: Usuario específico (ID: 1) ===');
            resolve(datos);
        }
    });
};

// Solicitud 3: Realice una solicitud GET para obtener todas las publicaciones (posts) asociadas a un usuario determinado.
const obtenerPublicacionesUsuario = async (userId) => {
    let respuesta = await fetch(`http://localhost:3000/posts?userId=${userId}`);
    let datos = await respuesta.json();
    return new Promise((resolve) => {
        let Proceso = true;
        if (Proceso) {
            console.log('=== SOLICITUD 3: Publicaciones del usuario (ID: 8) ===');
            resolve(datos);
        }
    });
};

// Ejecutar todas las solicitudes con promesas
obtenerUsuarios()
    .then((usuarios) => {
        console.log(usuarios);
        console.log('\n');
    });

obtenerUsuarioEspecifico(1)
    .then((usuario) => {
        console.log(usuario);
        console.log('\n');
    });

obtenerPublicacionesUsuario(8)
    .then((posts) => {
        console.log(posts);
    });