var hapi = require('hapi');
var joi = require('joi');
var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/chickens/{breed}',
    method: 'GET',
    config: {
        handler: (request, reply) => {
            reply('You asked for the chicken ' + request.params.breed);
        },
        validate: {
            params: {
                breed: joi.string().required()
            }
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});