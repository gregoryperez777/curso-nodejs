const fs = require('fs');
const colors = require('colors');

const listarTabla = (base, limite) => {
    let data =  '';

    console.log('============================='.green);
    console.log(`Tabla del ${base}`.green);
    console.log('============================='.green);

    for (let i = 1; i <= limite; i++) {
        data += `${base} * ${i} = ${base*i}\n`;
    }
    console.log(data);
};


const crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        let data =  '';

        if (!parseInt(base)) {
            reject(`La base ${base} no es un numero`);
            return;
        } 

        if (!parseInt(limite)) {
            reject(`El limite ${limite} no es un numero`);
            return;
        } 

        for (let i = 1; i <= limite; i++) {
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
    listarTabla,
}