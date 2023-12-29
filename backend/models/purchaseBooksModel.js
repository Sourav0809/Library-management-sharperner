const { Sequelize } = require('sequelize')
const sequelize = require('../util/database')

const purchaseBooks = sequelize.define('purchaseBooks', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    bookName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    purchaseTime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    expireTime: {
        type: Sequelize.STRING
    }


})

module.exports = purchaseBooks