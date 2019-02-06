 const uf = require('./uf-model.js')

class UfDAO {
  list() {
    return uf.findAll()
  }

  byId(id) {
    return uf.findAll({
      where: {
        id: id
      }
    })
  }
}
export default new UfDAO();