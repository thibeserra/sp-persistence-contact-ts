import Sequelize from 'sequelize';
import { sapriConnection } from '../../database';

const Uf = sapriConnection.define('uf', {
  id: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    primaryKey: true
  },
  descricao: {
    type: Sequelize.STRING(60),
    allowNull: false
  }
}, {
    tableName: 'uf',
  })

Uf.sync({ force: false })
  .then(() => {
    console.log('created schema: Uf')
  })

export default Uf;