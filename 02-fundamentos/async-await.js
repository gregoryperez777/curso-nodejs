/**
 * Async - Await
 **/

// const getNombre = () => {
//     return 'Gregory';
// }

// const getNombre = async() => {
//     throw new Error('hola soy un error');
//     return 'Gregory';
// }

// Esto es equivalente a la funcion de arriba
// async convierte nuestro resultado o return en una promesa 
// con tan solo colocar la palabra Async en la 
// definicion de la funcion

// const getNombre = () => {
//     return new Promise((resolve, reject) => {
//         resolve('Gregory');
//     });
// }

// Nota importa cualquier error ocurrido dentro de 
// una función async inicializa el error
// y para manejar errores definidos por ti utilizamos
// throw new Error

// Aqui se ejecuta getNombre = async() => { ... }
// ha sido comentado para seguir el video
// getNombre()
//     .then(nombre => {
//         console.log(nombre);
//     })
//     .catch(err => {
//         console.log(err);
//     });

/**************************************************************************/

const getNombre = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Gregory');
        }, 3000);
    });
}

// Para usar await la unica condicion es que debe estar dentro de 
// una funcion Async  
const saludo = async () => {
    const nombre = await getNombre();
    return `Hola ${nombre}`;
}

saludo()
    .then((result) => {
        console.log(result);
    })
    .catch(err => {
        console.log(err);
    });