const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    'node-complete',
    'root',
    'Chickoo11',
    {
        dialect: 'mysql',
        host: 'localhost'
    });

module.exports = sequelize;