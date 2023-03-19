function hola(nombre,callback){
    setTimeout(function(){
        console.log('Hola, ' + nombre);
        callback(nombre);
    },1000)
}

function hablar(callbackHablar){
    setTimeout(function(){
        console.log('blablabla..');
        callbackHablar();
    })
}

function adios(nombre,callback2){
    setTimeout(function(){
        console.log('Adios, '+ nombre)
        callback2(nombre);
    },1000)
}

console.log('Iniciando proceso..')
hola('Carlos',function(nombre){
    conversacion(nombre, 3, function(){
        console.log('Proceso terminado')
    });
});


function conversacion(nombre, veces, callback){
    if (veces > 0){
    hablar(function(){
        conversacion(nombre, --veces, callback);
    })
    }else {
        adios(nombre, callback);
    }

    };

// hola('Carlos',function(){

//     hablar(function(){
//         hablar(function(){
//             hablar(function(){
//         adios('Carlos',function(){
//             console.log('terminando proceso');
//             });
//         })
//     })
            

//     })
//   });