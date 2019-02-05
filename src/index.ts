import * as Hapi from 'hapi';
import Uf from './uf';

const server: Hapi.Server = new Hapi.Server({
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
  handler: (request: Hapi.Request, reply: any) => {
    let uf = new Uf();
    uf.id = 1;
    uf.description = 'sao paulo';
    
    return reply.response(uf).code(200);
  }
});

init();