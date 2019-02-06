import Sequelize from 'sequelize';
const sapriConnection = new Sequelize('sapri', 'root', 'labsprog', {
  host: 'localhost',
  dialect: 'mysql',
  poll: {
    max: 5,
    min: 1,
    idle: 10000
  }
})

const sapriDB = function () {
  this.sapriConnection.authenticate()
    .then(() => {
      console.log('Connection has been established successfully.')
    }).catch((e) => {
      console.error('Unable to connect to the database:', e);
    })
}

export { sapriConnection, sapriDB };