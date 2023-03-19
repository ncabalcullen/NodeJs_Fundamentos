const p = require('process');

process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabó');
    setTimeout(() => {
        console.log('Esto no se va a ejecutar nunca');
    })
});


process.on('uncaughtException', (err, origen) => {
    console.log('Se olvidó capturar un error');
    console.log(err);
    setTimeout(() => {
        console.log('Esto se ejcuta');
    })
});
// process.on('uncaughtRejection')


funcionnoexcite();

console.log('Esto si no se recoge no sale');