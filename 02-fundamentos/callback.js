// callback Basico
// setTimeout(() => {
//     console.log('Hola Mundo');
// }, 3000);


// Un callback es el llamado de una función
// por lo general el primer parametro de esta
// función hace referencia al error 
// y el segudo parametro hace referencia al 
// success del callback

// Cuando se retorna por el success al error 
// o primer parametro se le pasa null o undefined  

const getUserById = (id, callback) => {
    const usuario = {
        name: 'Gregory',
        id,
    };

    if (id === 20) {
        return callback(`Error usuario con id igual ${id} no existe en la DB`);
    } else {
        return callback(null, usuario);
    }
};

getUserById(1, (err, usuario) => {
    if (err) {
        return console.log(err);
    }

    console.log('usuario de la base de datos', usuario);
});