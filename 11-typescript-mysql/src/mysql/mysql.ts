import mysql = require('mysql');

export default class MySQL {

    private static _instance : MySQL;
    
    cnn: mysql.Connection;
    conectado: boolean = false;

    constructor() {
        console.log('clase inicializada');

        this.cnn = mysql.createConnection({
            host: 'localhost',
            user: 'node_user',
            password: '123456789',
            database: 'node_bd',
            socketPath: '/var/run/mysqld/mysqld.sock',  
        });

        this.conectarDB();
    }

    public static get instance() {
        return this._instance || (this._instance = new this());
    }

    static ejecutarQuery(query: string, callback: Function) {
        this.instance.cnn.query(query, (error, results: Object[], fields ) => {
            if (error) {
                console.log('Errorl en a query');
                console.log(error);

                return callback(error);
            }

            if (results.length === 0) {
                callback("el registro solicitado no existe");
            } else {
                callback(null, results);
            }


        }); 
    }

    private conectarDB () {
        this.cnn.connect((err: mysql.MysqlError) => {
            if (err) {
                console.log('Error \n', err);
                return;
            }
            this.conectado = true;
            console.log('base de datos online');
        });
    }
}