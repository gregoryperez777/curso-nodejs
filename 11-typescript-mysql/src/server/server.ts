import express = require('express');
import path = require('path');


export default class Server {
    public app: express.Application; 
    public port: number;

    constructor(puerto: number) {
        this.port = puerto;
        this.app = express(); 
    } 

    private publicFolder() {
        const publicPath = path.resolve(__dirname, '../public');
        this.app.use(express.static(publicPath));
    }
 
    static init (puerto: number) {
        return new Server(puerto);
    }

    start( callback: () => void) {
        this.app.listen( this.port, callback);
        this.publicFolder();
    }
} 