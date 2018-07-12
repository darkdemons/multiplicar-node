const fs = require('fs');

let listarTabla = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base introducida: ${ base }, No es un numero`);
            return;
        } else if (!Number(limite)) {
            reject(`el limite introducido ${ limite }, No es un numero`)
            return;
        }

        console.log('==================='.green);
        console.log(`   tabla del ${ base }`.green);
        console.log('==================='.green);

        for (let i = 1; i <= limite; i++) {
            data = `${ base } * ${ i } = ${ base * i}`;
            resolve(console.log(data))
        }


    });

}

let data = '';

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`la base introducida: ${ base }, No es un numero`.red);
            return;
        } else if (!Number(limite)) {
            reject(`el limite introducido ${ limite }, No es un numero`).red;
            return;
        }



        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limite}`.green);
        });

    })
}


module.exports = {
    crearArchivo,
    listarTabla
}