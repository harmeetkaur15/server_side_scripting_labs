var fs = require('fs');
var hapi = require('hapi');
var path = require('path');
var rot = require('rot13-transform');
var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.route({
    path: '/',
    method: 'GET',
    config: {
        handler: (request, reply) => {
            var thisfile = fs.createReadStream(path.join(__dirname, 'input.txt'));
            reply(thisfile.pipe(rot()));
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});