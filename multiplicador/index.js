const colors = require('colors');
const fs = require('fs');
const {logica} = require('./logica')

const multiplicar = (base, limite, visualizar) => {
    const resultado = logica(base, limite);
    
    if(visualizar)
    {
        console.log('================='.green);
        console.log(`  Tabla del ${base}  `);
        console.log('================='.green);    
        
        console.log(resultado);
    }
    const nombreArchivo = `tablas-del-${base}.txt`;
    fs.writeFile(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado correctamente`.rainbow);
      });
}

module.exports = {
    multiplicar
}