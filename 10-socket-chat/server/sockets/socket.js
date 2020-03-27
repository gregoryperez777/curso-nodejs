const { io } = require('../server');
const { Usuarios } = require('../clasess/usuarios');
const { crearMensaje } = require('../utilidades/utilidades'); 

const usuarios = new Usuarios();

io.on('connection', (client) => {

    console.log('Usuario conectado');

    client.on('entrarChat', (usuario, callback) => {                                                                                                                                            
        if (!usuario.nombre || !usuario.sala) {
            return callback({
                error: true,
                mensaje: 'el nombre y la sala es necesario'
            });
        }
    
        client.join(usuario.sala);

        usuarios.agregarPersona(client.id, usuario.nombre, usuario.sala);
        
        client.broadcast.to(usuario.sala).emit('listaPersona', usuarios.getPersonasPorSala(usuario.sala));
       
        callback(usuarios.getPersonasPorSala(usuario.sala));
    });

    client.on('crearMensaje', (data) => {

        let persona = usuarios.getPersona(client.id);

        let mensaje = crearMensaje(persona.nombre, data.mensaje);
        client.broadcast.emit('crearMensaje', mensaje);
    });

    // Mensajes privados 
    client.on('mensajePrivado', data => {
        

        console.log(data);

        let persona = usuarios.getPersona(client.id);
        client.broadcast.to(data.para).emit('mensajePrivado', crearMensaje(persona.nombre, data.mensaje));
        
    });


    client.on('disconnect', () => {
        console.log('hola desconectado');
        let personaBorrada = usuarios.borrarPersona(client.id);
        
        console.log('personaBorrada', personaBorrada);

        client.broadcast.to(personaBorrada.sala).emit('crearMensaje', crearMensaje('Admin', `${personaBorrada.nombre} Salió`));
        client.broadcast.to(personaBorrada.sala).emit('listaPersona', usuarios.getPersonasPorSala(personaBorrada.sala));
    });
});