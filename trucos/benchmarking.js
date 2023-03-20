console.time('todo');
let suma = 0;

console.time('bucle');

for (let i=0; i<11; i++){
    suma +=1;
}
console.timeEnd('bucle')

let suma2 = 0;

console.time('bucle2');

for (let i=0; i<11; i++){
    suma2 +=1;
}

console.timeEnd('bucle2')

console.timeEnd('todo');




function asincrona(){
    return new Promise((resolve) =>{
        setTimeout(function(){
            console.log('termina el proceso async');
            resolve();
        })
    })
}

console.log('Empieza el processo asincrono');
console.time('async');

asincrona()
    .then(() =>{
        console.timeEnd('async')
    });