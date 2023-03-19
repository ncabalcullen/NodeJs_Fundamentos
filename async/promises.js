function hola(nombre1){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            console.log('Hola, ' + nombre1);
            resolve(nombre1);
        },1000)
    }); 
    
}

function hablar(nombre1){
    return new Promise((resolve,reject) =>{
        setTimeout(function(){
            console.log('blablabla..');
            // resolve(nombre1);
            reject('Hay un error');
        })
    })
   
}

function adios(nombre1){
    return new Promise ((resolve,reject) => {
        setTimeout(function(){
            console.log('Adios, ' + nombre1);
            resolve();
        },1000)
    })
   
}


//--

console.log('Iniciando el proceso')
hola ('Carlos')
    .then((nombre1) => {
        console.log('Terminado el proceso')
    })
    .then(hablar)
    .then(adios)
    .catch(error =>{
        console.error('Ha habido un error');
        console.error(error);
    });