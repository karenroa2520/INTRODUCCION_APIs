
// Parte 3: Actualización de información (PUT y PATCH)


// Las solicitudes PUT y PATCH se utilizan para MODIFICAR recursos existentes
// La diferencia principal es:
// - PUT: Actualiza TODOS los campos del recurso (reemplaza completamente)
// - PATCH: Actualiza SOLO los campos especificados (modificación parcial)

// Solicitud 6: Actualizar completamente una publicacion (PUT)
const actualizarPublicacionPUT = async () => {
    // Se define el objeto con TODOS los campos que tendrá la publicación actualizada
    // Cuando se usa PUT, se debe enviar la representación COMPLETA del recurso
    // id: 1 (el ID del recurso que queremos actualizar)
    // userId: 1 (el usuario dueño de la publicación)
    // title: Nuevo título de la publicación
    // body: Nuevo contenido de la publicación
    let publicacionActualizada = {
        userId: 1,
        id: 1,
        title: "APIs RESTful - Guía completa actualizada",
        body: "Esta es una guía completa sobre APIs RESTful, sus métodos, buenas prácticas y ejemplos de implementación."
    };
    
    // Se realiza la petición PUT al servidor
    // La URL incluye el ID del recurso a actualizar: '/posts/1'
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        // method: 'PUT' indica que queremos ACTUALIZAR COMPLETAMENTE un recurso existente
        // PUT reemplaza todo el recurso con los nuevos datos proporcionados
        method: 'PUT',
        
        // headers: Define el tipo de contenido que enviamos
        headers: {
            'Content-Type': 'application/json'
        },
        
        // body: Contiene los datos actualizados en formato JSON
        // JSON.stringify() convierte el objeto JavaScript a cadena JSON
        body: JSON.stringify(publicacionActualizada)
    });
    
    // Se convierte la respuesta del servidor a formato JSON
    // El servidor devuelve el recurso actualizado
    let datos = await respuesta.json();
    
    // Mensaje indicando que solicitud se ejecuto
    console.log('=== SOLICITUD 6: Actualizar publicación con PUT ===');
    
    // Se muestran los datos del recurso actualizado
    console.log(datos);
};

// Solicitud 7: Modificar un campo especifico (PATCH)
const actualizarPublicacionPATCH = async () => {
    // Se define el objeto con SOLO los campos que queremos modificar
    // Con PATCH no es necesario enviar todos los campos del recurso
    // Solo se envian los campos que se desean actualizar
    let cambioParcial = {
        // Solo actualizamos el titulo, el resto de campos permanecen igual
        title: "APIs RESTful - Actualización con PATCH"
    };
    
    // Se realiza la peticion PATCH al servidor
    // La URL es la misma que con PUT, pero el método es diferente
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        // method: 'PATCH' indica que queremos ACTUALIZAR PARCIALMENTE un recurso
        // PATCH solo modifica los campos especificados, dejando el resto intactos
        method: 'PATCH',
        
        headers: {
            'Content-Type': 'application/json'
        },
        
        // Solo enviamos el campo 'title' que queremos modificar
        body: JSON.stringify(cambioParcial)
    });
    
    // Se obtiene la respuesta del servidor en formato JSON
    let datos = await respuesta.json();
    
    // Mensaje de la solicitud
    console.log('=== SOLICITUD 7: Actualizar campo específico con PATCH ===');
    
    // Se muestran los datos del recurso después de la actualización parcial
    console.log(datos);
};


// Función que ejecuta ambas solicitudes en orden secuencial
const ejecutarSolicitudes = async () => {
    // Primero se ejecuta la actualización completa con PUT
    // await espera a que termine antes de continuar
    await actualizarPublicacionPUT();
    
    // Luego se ejecuta la actualización parcial con PATCH
    // Esto demuestra la diferencia entre ambos métodos
    await actualizarPublicacionPATCH();
};

// Se llama a la función para iniciar la ejecución
ejecutarSolicitudes();
