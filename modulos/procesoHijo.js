// const {exec} = require('child_process');
const {exec, spawn} = require('child_process');

// para linux 'ls -la' para windows 'dir'
// exec('dir', (err, stdout ,sterr) =>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout)
// })

// exec('node modulos/consola.js', (err, stdout ,sterr) =>{
//     if(err){
//         console.error(err);
//         return false;
//     }

//     console.log(stdout)
// })
try{
let proceso = spawn('hostname');

proceso.stdout.on('data', function (dato) {
    console.log(process.killed)
    console.log(dato.toString());
})

proceso.on('exit', function(){
    console.log(proceso.killed)
})
}catch(err){
    console.log(err.message);
}

