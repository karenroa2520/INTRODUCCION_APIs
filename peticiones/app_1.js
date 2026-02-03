// ============================================
// Parte 1: Solicitudes de consulta (GET)
// ============================================

// Solicitud 1: Realice una solicitud GET para obtener la lista completa de usuarios disponibles en el servicio.
const obtenerUsuarios = async () => {
    // Se usa await para esperar la respuesta del servidor
    // fetch hace la petición HTTP a la URL de usuarios
    let respuesta = await fetch('http://localhost:3000/users');
    
    // Se convierte la respuesta a formato JSON para poder usar los datos
    let datos = await respuesta.json();
    
    // Se retorna una PROMESA para manejar la respuesta de forma asincrona
    // Las promesas se usan para controlar el flujo de operaciones asincronas
    // y evitar que el código se ejecute antes de tener los datos
    return new Promise((resolve) => {
        // Variable que controla si el proceso se ejecuta (siempre true en este caso)
        let Proceso = true;
        
        // Se verifica si el proceso está activo antes de resolver la promesa
        if (Proceso) {
            // Se imprime el mensaje de la solicitud en consola
            console.log('=== SOLICITUD 1: Lista de usuarios ===');
            
            // Se RESUELVE la promesa devolviendo los datos obtenidos
            // resolve() indica que la operación terminó correctamente
            resolve(datos);
        }
    });
};

// Solicitud 2: Realice una solicitud GET para consultar la informacion de un usuario especifico, utilizando su identificador
const obtenerUsuarioEspecifico = async (id) => {
    // Se hace la petición GET pasando el ID del usuario en la URL
    // El parámetro 'id' se inserta en la URL usando template literals `${id}`
    let respuesta = await fetch(`http://localhost:3000/users/${id}`);
    
    // Se convierte la respuesta JSON
    let datos = await respuesta.json();
    
    // Se retorna una PROMESA para manejar la respuesta asíncrona
    return new Promise((resolve) => {
        // Variable de control del proceso
        let Proceso = true;
        
        // Verificación del proceso
        if (Proceso) {
            // Mensaje indicando qué solicitud se está ejecutando
            console.log('=== SOLICITUD 2: Usuario específico (ID: 1) ===');
            
            // Se resuelve la promesa con los datos del usuario
            resolve(datos);
        }
    });
};

// Solicitud 3: Realice una solicitud GET para obtener todas las publicaciones (posts) asociadas a un usuario determinado.
const obtenerPublicacionesUsuario = async (userId) => {
    // Se hace la petición GET con un parámetro de consulta '?userId='
    // Esto filtra las publicaciones por el ID del usuario especificado
    let respuesta = await fetch(`http://localhost:3000/posts?userId=${userId}`);
    
    // Se convierte la respuesta a JSON
    let datos = await respuesta.json();
    
    // Se retorna una PROMESA para manejar la operación asíncrona
    return new Promise((resolve) => {
        // Variable de control
        let Proceso = true;
        
        // Verificación antes de resolver
        if (Proceso) {
            // Mensaje de la solicitud
            console.log('=== SOLICITUD 3: Publicaciones del usuario (ID: 8) ===');
            
            // Se resuelve la promesa con los posts del usuario
            resolve(datos);
        }
    });
};

// ============================================
// Ejecución de las solicitudes
// ============================================

// Se ejecuta la primera solicitud y se maneja con .then()
// .then() se ejecuta CUANDO la promesa se resuelve correctamente
// Recibe los datos devueltos por resolve() como parámetro 'usuarios'
obtenerUsuarios()
    .then((usuarios) => {
        // Se imprimen los usuarios en consola
        console.log(usuarios);
        // Salto de línea para mejor visualización
        console.log('\n');
    });

// Se ejecuta la segunda solicitud pasando el ID=1
// Cada .then() maneja la respuesta de su respectiva promesa
obtenerUsuarioEspecifico(1)
    .then((usuario) => {
        // Se imprime la información del usuario específico
        console.log(usuario);
        console.log('\n');
    });

// Se ejecuta la tercera solicitud pasando el userId=8
// Las tres solicitudes se ejecutan de forma independiente
obtenerPublicacionesUsuario(8)
    .then((posts) => {
        // Se imprimen las publicaciones del usuario
        console.log(posts);
    });
