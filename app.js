
//const multiplicar = require('./multiplicar/multiplicar');
const {crearArchivo, listarTabla} = require('./multiplicar/multiplicar')
const {argv} = require('./config/yargs')

//console.log(module)
//console.log(process)
//console.log(process.argv)
//base = process.argv[2].split('=')[1]

//console.log(multiplicar)

let comando = argv._[0]
//console.log(argv)
switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${archivo} se ha creado`))
            .catch(err => console.log(err))
        break
    default:
        console.log('Comando no reconocido')
}