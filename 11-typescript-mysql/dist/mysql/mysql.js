"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
class MySQL {
    constructor() {
        this.conectado = false;
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
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    static ejecutarQuery(query, callback) {
        this.instance.cnn.query(query, (error, results, fields) => {
            if (error) {
                console.log('Errorl en a query');
                console.log(error);
                return callback(error);
            }
            if (results.length === 0) {
                callback("el registro solicitado no existe");
            }
            else {
                callback(null, results);
            }
        });
    }
    conectarDB() {
        this.cnn.connect((err) => {
            if (err) {
                console.log('Error \n', err);
                return;
            }
            this.conectado = true;
            console.log('base de datos online');
        });
    }
}
exports.default = MySQL;
