const Sequelize = require('sequelize');

// Initializing the database
const sequelize = new Sequelize(
    'booking-appointment-app-db',
    'root',
    'Chickoo11',
    {
        dialect: 'mysql',
        host: 'localhost'
    });

module.exports = sequelize;