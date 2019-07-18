const http = require('http');

http.createServer((req, res) => {
    /*
        res.write('hola mundo');
        res.end();
    */

    res.writeHead(200, {'content-type': 'application/json'});
    const out = {
        name: 'gregory',
        age: 32,
        url: req.url,
    };

    res.write(JSON.stringify(out));
    res.end();
})
.listen(8080);
console.log('escuchando en el puerto 8080');