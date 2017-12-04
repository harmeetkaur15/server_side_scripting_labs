var hapi = require('hapi');
var inert = require('inert');
var path = require('path');
var server = new hapi.Server();

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(inert, (error) => {
    if (error) throw error;
});

server.route({
    method: 'GET',
    path: '/foo/bar/baz/{filename}',
    handler: {
        directory: {
            path: path.join(__dirname, 'public')
        }
    }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});