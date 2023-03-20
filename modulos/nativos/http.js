const http = require('http');


http.createServer(router).listen(3000);

function router(req, res){
    // request, response

    console.log('Nueva peticion');
    console.log(req.url)

    switch(req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end()
            break;
        default:
            res.write('Hola, no entiendo')
            res.end();
    }
    // res.writeHead(201, {'Content-type': 'text/plain'})

    // res.end();
}

console.log("escuchando http en puerto 3000")

//ejecutar con --inspect para debuggear
