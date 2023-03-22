const Sequelize = require('sequelize');

const sequelize = new Sequelize('march21m', 'root', '#@Dharm007', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
