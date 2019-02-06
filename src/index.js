import * as Hapi from 'hapi';

const server = new Hapi.Server({
  port: 1337,
  host: 'localhost'
});

const init = () => {
  server.start();
  console.log(`server running at: ${server.info.uri}`);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    return reply.response(`{message: hello world }`).code(200);
  }
});

init();