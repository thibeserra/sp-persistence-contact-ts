import * as Hapi from 'hapi';
import routes from './routes-register';

const server = new Hapi.Server({
  port: 1337,
  host: 'localhost'
});

const start = async () => {
  try {
    await server.register(routes);
    server.start();
    console.log(`server running at: ${server.info.uri}`);
  } catch (e) {
    console.error(e)
    process.exit(1)
  }
};

start();