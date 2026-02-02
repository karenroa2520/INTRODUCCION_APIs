// Parte 1: Solicitudes de consulta (GET)

// Solicitud 1: Realice una solicitud GETpara obtener la lista completa de usuarios disponibles en el servicio.
const obtenerUsuarios = async () => {
    let respuesta = await fetch('http://localhost:3000/users'); //se utiliza la direccion local sin modicaciones
    let datos = await respuesta.json();
    return datos;
};

// Solicitud 2: Realice una solicitud GET para consultar la información de un usuario específico, utilizando su identificador.
const obtenerUsuarioEspecifico = async (id) => {
    let respuesta = await fetch(`http://localhost:3000/users/${id}`);
    let datos = await respuesta.json();
    return datos;
};

// Solicitud 3: Realice una solicitud GET para obtener todas las publicaciones (posts)asociadas a un usuario determinado.
const obtenerPublicacionesUsuario = async (userId) => {
    let respuesta = await fetch(`http://localhost:3000/posts?userId=${userId}`);
    let datos = await respuesta.json();
    return datos;
};

// Ejecutar todas las solicitudes
const ejecutarSolicitudes = async () => {
    
    console.log('=== SOLICITUD 1: Lista de usuarios ===');
    let usuarios = await obtenerUsuarios();
    console.log(usuarios);
    console.log('\n');
    
    console.log('=== SOLICITUD 2: Usuario específico (ID: 1) ===');
    let usuario = await obtenerUsuarioEspecifico(1);
    console.log(usuario);
    console.log('\n');
    
    console.log('=== SOLICITUD 3: Publicaciones del usuario (ID: 8) ===');
    let posts = await obtenerPublicacionesUsuario(8);
    console.log(posts);
};

// Ejecutar el programa
ejecutarSolicitudes();