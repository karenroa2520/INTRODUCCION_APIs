// Parte 5: Análisis y verificación de respuestas

// Solicitud 9: Repita una solicitud GET sobre el recurso eliminado y analice la respuesta obtenida.
const verificarRecursoEliminado = async () => {
    let respuesta = await fetch('http://localhost:3000/posts/1');
    let datos = await respuesta.json();
    return new Promise((resolve) => {
        let Proceso = true;
        if (Proceso) {
            console.log('=== SOLICITUD 9: Verificar recurso eliminado (ID=1) ===');
            resolve(datos);
        }
    });
};

// Solicitud 10: Realice una solicitud GET general y compare la estructura de la respuesta.
const compararEstructuraGeneral = async () => {
    let respuesta = await fetch('http://localhost:3000/posts');
    let datos = await respuesta.json();
    return new Promise((resolve) => {
        let Proceso = true;
        if (Proceso) {
            console.log('=== SOLICITUD 10: Comparar estructura general de posts ===');
            resolve(datos);
        }
    });
};

// Ejecutar las solicitudes con promesas
verificarRecursoEliminado()
    .then((datos) => {
        console.log(datos);
        console.log('\n');
    });

compararEstructuraGeneral()
    .then((datos) => {
        console.log(datos);
    });