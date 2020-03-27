var socket = io();


var params = new URLSearchParams( window.location.search );

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new error('nombre y sala es necesario');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala'),
}

socket.on('connect', function() {
    console.log('Conectado al servidor');
    socket.emit('entrarChat', usuario, function( resp ) {
        console.log(resp);
    });
});

// escuchar cuando un usuario entra o sale del chat
socket.on('listaPersona', function(personas) {
    console.log('Lista de Personas', personas);
});

// escuchar
socket.on('disconnect', function() {
    console.log('Usuario desconectado');
});

// Enviar información
// socket.emit('crearMensaje', {
//    mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escuchar información
socket.on('crearMensaje', function(mensaje) {
    console.log('servidor: ', mensaje);
});

// Mensaje Privado

socket.on('mensajePrivado', function(mensaje) {
    console.log('mensaje privado: ', mensaje);
});