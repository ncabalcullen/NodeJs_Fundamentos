
function otra(){
    return rompe();
}

function rompe (){
    return 3+z;
}

function rompeAsync(cb){
    setTimeout(function (){
        try{
        return 3+z;
    }catch(err){
        console.error('Error en funcion async');
        cb(err);
    }
    })
}

try{

rompeAsync(function(){
    console.error('hay error')
});
}
catch(err){
    console.error(err.message);
}