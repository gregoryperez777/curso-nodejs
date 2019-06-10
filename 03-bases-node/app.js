const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

/**
 *  Existen varios objetos corriendo en Node 
 *  cuando la aplicación se ejecuta
 *  por ejemplo existen 
 * 
 *  module
 *  process. Dentro de process exite argv donde llegan los parametros
 *  desde la terminal 
 **/ 

 const comando = argv._[0];

 switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
    break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`Se creo el archivo`, colors.green(`${archivo}`));
            })
            .catch(error => {
                console.log(error);
            });
    break;

    default:
        console.log('Comando no reconocido');

 }

//  Para obtener argumentos por consola sin usar yargs
//  const base = process.argv[2].split('=')[1];


