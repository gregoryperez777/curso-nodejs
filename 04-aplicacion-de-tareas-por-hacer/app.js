const argv = require('./config/yargs').argv;
const colors = require('colors');

const toDo = require('./to-do/toDo');
const command = argv._[0];

switch(command) {
    case 'create':
       const task = toDo.create(argv.description);
       console.log(task);
    break;

    case 'list':
        const list = toDo.getListed();
        list.map((task) => {
            console.log('=============Por Hacer============='.green);
            console.log(task.description);
            console.log('Estado:', task.completed);
            console.log('==================================='.green);
        })
    break;

    case 'update':
        toDo.update(argv.description, argv.completed);
    break;

    case 'delete':
        const removeItem = toDo.removeItem(argv.description);
        console.log(removeItem);
    break;

    default:
        console.log('comando no es reconocido');
}