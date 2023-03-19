async function hola(nombre){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, ' + nombre);
            resolve(nombre);
        },1000)
    }); 
    
}

function hablar(nombre){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log('blablabla..');
            // resolve(nombre);
            resolve(nombre);
        })
    })
   
}

function adios(nombre){
    return new Promise ((resolve,reject) => {
        setTimeout(function(){
            console.log('Adios, ' + nombre);
            resolve();
        },1000)
    })
   
}


//--

// console.log('Iniciando el proceso')
// hola ('Carlos')
//     .then(hablar)
//     .then((nombre) => {
//         console.log('Terminado el proceso')
//     })
//     .then(adios)
//     .catch(error =>{
//         console.error('Ha habido un error');
//         console.error(error);
//     });


async function main(){
    let nombre = await hola('Carlos');
    await hablar();
    await hablar();
    await hablar();
    await adios(nombre);
    console.log('termina el proceso')
}

console.log('Empezamos el proceso');
main();