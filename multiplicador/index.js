const fs = require('fs');
const {logica} = require('./logica')

const multiplicar = (base) => {
    console.log('=================');
    console.log(`  Tabla del ${base}  `);
    console.log('=================');    
    
    const resultado = logica(base);

    console.log(resultado);
    const nombreArchivo = `tablas-del-${base}`;
    fs.writeFileSync(`tablas/${nombreArchivo}`, resultado, (err) => {
        if (err) throw err;
        console.log(`El archivo ${nombreArchivo} fue creado correctamente`);
      });
}

module.exports = {
    multiplicar
}