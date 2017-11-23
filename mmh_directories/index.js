var Hapi = require('hapi');
var Inert = require('inert');
var Path = require('path');



server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});
var server = new Hapi.Server();

server.register(Inert, (err) => {
    if (err) throw err;
});
server.route({
    method: 'GET',
    path: '/foo/bar/baz/{filename}',
    handler: {
        directory: {
        path: Path.join(__dirname, 'public')
        }
    }
});
 server.start(function () {
    console.log('Server running at:', server.info.uri);
    });