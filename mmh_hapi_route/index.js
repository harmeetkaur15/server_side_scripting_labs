<<<<<<< HEAD
const Hapi = require('hapi');
const server = new Hapi.Server();
=======
let Hapi = require('hapi');
let server = new Hapi.Server();
>>>>>>> d3e812d750fa5d14cc17f900454b0cb86aef34db

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});


server.route({
    method: 'GET',
    path: '/{name}',
    handler: (request, reply) => {
        reply('Hello ' + request.params.name);
        
    }
});
server.start((err) => {
    if (err) throw err;
});
