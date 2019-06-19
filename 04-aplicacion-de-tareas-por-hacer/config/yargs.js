const description = {
    demand: true,
    alias: 'd',
};

const completed = {
    demand: false,
    alias: 'c',
    default: true,
};

const argv = require('yargs')
    .command('create','Crea un elemento por hacer', {
        description,
    })
    .command('update', 'Actualiza un elemento por hacer', {
        description,
        completed,
    })
    .command('delete', 'Elimina un elemento por hacer', {
        description,
    })
    .help()
    .argv;

module.exports = {
    argv
}