var hapi = require('hapi');
var boom = require('boom');

var server = new hapi.Server();
server.connection({
    host: 'localhost',
    port: Number(process.argv[2] || 8080)
});

server.state('session', {
    path: '/',
    encoding: 'base64json',
    ttl: 10,
    domain: 'localhost',
    isSameSite: false,
    isSecure: false,
    isHttpOnly: false
});

server.route({
    method: 'GET',
    path: '/set-cookie',
    handler: (request, response) => {
        return response({
            message : 'success'
        }).state('session', { key : 'makemehapi' });
    },
    config: {
        state: {
            parse: true,
            failAction: 'log'
        }
    }
});

server.route({
    method: 'GET',
    path: '/check-cookie',
    handler: (request, response) => {
        var session = request.state.session;
        var r;

        if (session) {
            r = { user : 'hapi' };
        } else {
            r = boom.unauthorized('Missing authentication');
        }

        response(r);
    }
});
server.start(function () {
    console.log('Server running at:', server.info.uri);
})