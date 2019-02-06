import * as Hapi from 'hapi';
import blipp from 'blipp';
import uf_routes from './api/uf/uf-routes';

const server = new Hapi.Server({
  port: 1337,
  host: 'localhost'
});

const start = async () => {
  try {
    await server.register(blipp);
    await server.register(uf_routes);
    await server.start();
    console.log(`server running at: ${server.info.uri}`);
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
};

start();