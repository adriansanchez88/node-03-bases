const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l',{
        alias: 'limite',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Es el límite hasta donde se va a generar la tabla de multiplicar'
    })
    .option('v',{
        alias: 'visualizar',
        type: 'boolean',
        demandOption: false,
        default: false,
        describe: 'Muestra la tabla por consola'
    })
    .check((argv, options) =>{
        if (isNaN(argv.b) || isNaN(argv.l)) {
            throw new Error('La base tiene que ser un número.')
        }
        else
        {
            return true;
        }
    })
    .help()
    .version()
    .argv;
const { option } = require('yargs');
const {multiplicar} = require('./multiplicador');

multiplicar(argv.b, argv.l, argv.v);