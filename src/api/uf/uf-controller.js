import business from './uf-business.js';

class UfController {

  async list(request, reply) {
    try {
      const result = await business.list();
      return reply.response(result).code(200)
    } catch (e) {
      return reply.response(e.error).code(e.statusCode)
    }
  }

  async byId(request, reply) {
    const options = {
      headers: request.headers,
      params: request.params,
      payload: request.payload
    }

    try {
      const result = await business.byId(options.params.id)
      return await reply.response(result).code(200)
    } catch (e) {
      return reply.response(e.error).code(e.statusCode)
    }
  }
}
export default new UfController();