let hapi = require('hapi');
let path = require('path');
let inert = require('inert');

var server = new hapi.Server();
let server = new hapi.Server({
    connections: {
        routes: {
            files: {
                relativeTo: __dirname
            }
        }
    }
});

server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(inert, (error) => {
    if (error) throw error;
});

server.route({
    path: '/',
    method: 'GET',
    handler: {
        file: path.join(__dirname, 'index.html')
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
})