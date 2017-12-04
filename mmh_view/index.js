var hapi = require('hapi');
var vision = require('vision');
var path = require('path');
var server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.register(vision, (error) => {
    if (error) throw error;
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: path.join(__dirname, 'templates')
});

server.route({
    method: 'GET',
    path: '/',
    handler: {
    view: 'index.html'
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
});