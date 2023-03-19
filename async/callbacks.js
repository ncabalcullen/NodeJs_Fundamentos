function hola(nombre,callback){
    setTimeout(function(){
        console.log('Hola, ' + nombre);
        callback();
    },1000)
}

function adios(nombre, callback2){
    setTimeout(function(){
        console.log('Adios, '+ nombre)
        callback2();
    },1000)
}


console.log('Iniciando proceso..')
hola('Carlos',function(){
    adios('Carlos',function(){
    console.log('terminando proceso');
    });
});