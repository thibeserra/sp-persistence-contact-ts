import dao from './uf-dao.js';

class UfBusiness {
  list() {
    return dao.list()
  }

  byId(id) {
    return dao.byId(id)
  }
}

export default new UfBusiness();