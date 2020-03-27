var socket = io();

var searchParams = new URLSearchParams(window.location.search);

console.log('searchParams', searchParams.has('escritorio'));

if (!searchParams.has('escritorio')) {
    window.location = 'index.html';
    throw err('El escritorio es necesario');
}

var escritorio = searchParams.get('escritorio');
var label = $('small');

console.log('escritorio', escritorio);

$('h1').text(`Escritorio ${ escritorio }`);

$('button').on('click', function() {
    socket.emit('atenderTicket', { escritorio }, function(resp) {
        console.log('resp', resp);

        if (resp === 'no hay tickets') {
            label.text(resp);
            alert('no hay mas tickets');
            return;
        }
        
        label.text(resp.numero);
    });
});