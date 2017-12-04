var hapi = require('hapi');
var server = new hapi.Server();

server.connection({
  port: Number(process.argv[2] || 8080),
  host: 'localhost'
});

server.route({
  path: '/upload',
  method: 'POST',
  config: {
    handler: (request, reply) => {
      var b = '';

      request.payload.file.on('data', (data) => {
        b += data;
      });

      request.payload.file.on('end', () => {
        var result = {
          description: request.payload.description,
          file: {
            data: b,
            filename: request.payload.file.hapi.filename,
            headers: request.payload.file.hapi.headers
          }
        };

        reply(JSON.stringify(result));
      });
    },
    payload: {
      output: 'stream',
      parse: true,
      allow: 'multipart/form-data'
    }
  }
});

server.start(function () {
    console.log('Server running at:', server.info.uri);
});