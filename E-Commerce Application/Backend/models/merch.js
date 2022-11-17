const Sequelize = require('sequelize');

const sequelize = require('../util/database.js');

// Creating Users Table
const Merch = sequelize.define('merch',{
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },

    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },

    imageUrl: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Merch;