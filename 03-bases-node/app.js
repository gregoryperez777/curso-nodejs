const { crearArchivo } = require('./multiplicar/multiplicar');

const base = '15';

crearArchivo(base)
    .then(archivo => {
        console.log(`Se creo el archivo ${archivo}`);
    })
    .catch(error => {
        console.log(error);
    });
