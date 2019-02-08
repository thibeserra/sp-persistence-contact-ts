import UfController from './uf-controller';
import {byId} from './uf-schema';

const uf_routes = {
  name: 'uf_routes_plugin',
  version: '1.0.0',
  register: async (server, options) => {
    server.bind(UfController)
    server.route([{  
      method: 'GET',
      path: '/uf',
      config: {
        description: 'list all ufs',
        tags: ['api'],
        handler: UfController.list
      }
    }, {
      method: 'GET',
      path: '/uf/{id}',
      config: {
        description: 'find uf by id',
        tags: ['api'],
        handler: UfController.byId,
        validate: byId
      }
    }]);
  }
}

module.exports = uf_routes;