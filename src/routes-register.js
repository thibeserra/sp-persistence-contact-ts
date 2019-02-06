import * as dir from 'node-dir';

const routes = {
  name: 'routes_plugin',
  version: '1.0.0',
  register: async (server, options) => {
    console.log('perai');
    console.log(`${__dirname}/src/api`);
    dir.readFiles(`${__dirname}/src/api`, function(err, content, filename, next) {
      if(filename.includes('-routes.js')) {
        console.log('registered route: ', filename);
        server.register(require(filename))
      }
      next(); 
    });
  }
}
export default routes;