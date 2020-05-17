import Server from './server/server';
import router from './router/router';
import MySQL from './mysql/mysql';


const server = Server.init(3000);
server.app.use(router);

// se puede instanciar asi!
// const mysql = new MySQL();

// MySQL instance
// usando patron singleston
//MySQL.instance;



server.start(() => {
    console.log('Servidor esta corriendo');
});