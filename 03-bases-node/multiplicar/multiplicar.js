const fs = require('fs');

const crearArchivo = base => {
    return new Promise((resolve, reject) => {
        let data =  '';

        if (!parseInt(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        } 

        for (let i = 1; i <= 10; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            resolve(`tabla-${base}`);
        });
    });
};

module.exports = {
    crearArchivo,
}