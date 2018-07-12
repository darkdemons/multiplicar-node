const argv = require('./config/yargs').argv;
const colors = require('colors')

let { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let base = argv.base;
let limite = argv.limite;

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(base, limite)
            .then(resultado => console.log(resultado))
            .catch(e => console.log(e))
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`se creo el archivo: ${ archivo }`))
            .catch(err => console.log(err))
        break;

    default:
        console.log('el comando no existe'.red);
}


//let parametro = argv[2];
//let base = parametro.split('=')[1];