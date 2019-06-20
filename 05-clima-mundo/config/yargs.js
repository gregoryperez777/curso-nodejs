const argv = require('yargs')
    .options({
        address: {
            alias: 'a',
            desc: 'Dirección de la ciudad para obtener el clima',
            demand: true,
        }
    })
    .argv;

module.exports = {
    argv
};
 