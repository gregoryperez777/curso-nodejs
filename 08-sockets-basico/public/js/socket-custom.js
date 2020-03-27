var socket = io();

        socket.on('connect', () => {
            console.log('Connectado al servidor');
        });

        // Evento on escuchan informacion
        socket.on('disconnect', () => {
            console.log('Perdimos conexion con el servidor');
        });


        // evento emit envia informacion
        socket.emit('enviarMensaje', {
            usuario: 'Gregory',
            mensaje: 'hola mundo'
        }, function(resp) {
            console.log('respuesta del server', resp);
        });

        // Escuchar informacion del servidor
        socket.on('enviarMensaje', function(mensaje) {
            console.log('mensaje', mensaje);
        })