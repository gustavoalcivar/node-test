const fs = require('fs');

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(isNaN(base)) {
            reject(`${base} no es un número`)
            return
        }
        if(isNaN(limite)) {
            reject(`${limite} no es un número`)
            return
        }

        let data = ''

        for (let i = 1; i <= limite; i ++) {
            data += `${base} * ${i} = ${base * i}\n`
        }
        
        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}.txt`)
        });
    })
}

let listarTabla = (base, limite) => {
    if(isNaN(base)) {
        reject(`${base} no es un número`)
        return
    }
    if(isNaN(limite)) {
        reject(`${limite} no es un número`)
        return
    }

    let data = ''

    for (let i = 1; i <= limite; i ++) {
        data += `${base} * ${i} = ${base * i}\n`
    }
    console.log(data)
}

module.exports = {
    crearArchivo,
    listarTabla
}