
const peticion1 =() =>{
    let eliminacion_post = fetch('http://localhost:3000/posts/1', {
    method: 'DELETE',
    })
    console.log(`Peticion 1: ESTA INFORMACION HA SIFO ELIMANDA DEL SISTEMA(ID-N=1)`);
}
peticion1();