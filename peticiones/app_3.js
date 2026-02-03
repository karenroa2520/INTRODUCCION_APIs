// Solicitud 6: Actualizar completamente una publicación (PUT)
const actualizarPublicacionPUT = async () => {
    let publicacionActualizada = {
        userId: 1,
        id: 1,
        title: "APIs RESTful - Guía completa actualizada",
        body: "Esta es una guía completa sobre APIs RESTful, sus métodos, buenas prácticas y ejemplos de implementación."
    };
    
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(publicacionActualizada)
    });
    
    let datos = await respuesta.json();
    console.log('=== SOLICITUD 6: Actualizar publicación con PUT ===');
    console.log(datos);
};

// Solicitud 7: Modificar un campo específico (PATCH)
const actualizarPublicacionPATCH = async () => {
    let cambioParcial = {
        title: "APIs RESTful - Actualización con PATCH"
    };
    
    let respuesta = await fetch('http://localhost:3000/posts/1', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(cambioParcial)
    });
    
    let datos = await respuesta.json();
    console.log('=== SOLICITUD 7: Actualizar campo específico con PATCH ===');
    console.log(datos);
};

// Ejecutar las solicitudes
const ejecutarSolicitudes = async () => {
    await actualizarPublicacionPUT();
    await actualizarPublicacionPATCH();
};

ejecutarSolicitudes();