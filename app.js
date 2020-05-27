//requireds
//const fs = require('fs'); //ESTe es fyleSistem https://nodejs.org/dist/latest-v12.x/docs/api/fs.html#fs_file_system
//const fs = require('express'); //NO NATIVOS DE NODE, NO EXISTE EN NODE, SE INSTALA
//const fs = require('./fs'); //Archivos locales
const argv = require('./config/yargs').argv;
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

//console.log(argv);

let comando = argv._[0];
switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite).then(archivo => {
            console.log(`Archivo Creado ${archivo}`);
        }).catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');
}
//let base = '5';

//console.log(process.argv);
//let argv = process.argv;
//let parametro = argv[2];
//let base = parametro.split("=")[1];

//console.log('Limite', argv.limite);
/*
crearArchivo(base).then(archivo => {
    console.log(`Archivo Creado ${archivo}`);
}).catch(err => console.log(err));
*/