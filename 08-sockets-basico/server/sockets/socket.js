const { io } = require('../server'); 

io.on('connection', (client) => {
    console.log('Usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta App'
    });

    client.on('disconnect', () => {
        console.log('Usuario desconectado');
    });
    
    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {


        client.broadcast.emit('enviarMensaje', data);

        console.log(data);

        // console.log('mensaje del cliente', mensaje);
        // if (mensaje.usuario) {
        //     callback({
        //         resp: 'Todo salio bien'
        //     })
        // } else {
        //     callback({
        //         resp: 'Todo salio Mal'
        //     })
        // }
    }); 
});