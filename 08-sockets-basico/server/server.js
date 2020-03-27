const express = require('express');
const sockeIO = require('socket.io');

// se importa http porque socketIO no trabaja 
// con el servidor creado con const app = express();
// sino con el servidor nativo de NodeJs creado 
// a traves de http
// Nota: el paquete http ya viene con nodejs
// no hay que colocarlo en el package.json 
const http = require('http');

const path = require('path');

const app = express();
let server = http.createServer(app);

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));


// io es la comunicacion con el backend
module.exports.io = sockeIO(server);

require('./sockets/socket');

server.listen(port, (err) => {

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});