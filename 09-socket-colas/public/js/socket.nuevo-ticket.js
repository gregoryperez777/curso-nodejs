var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('conectado')
});

socket.on('estadoActual', function(ultimoTicket) {
    label.text(ultimoTicket.actual);
});

socket.on('disconnect', function() {
    console.log('desconectado')
});

$('button').on('click', function() {
    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
        console.log(siguienteTicket);
    });
})