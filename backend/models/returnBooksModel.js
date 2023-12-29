const sequelize = require('../util/database')
const Sequelize = require('sequelize')

const returnBooks = sequelize.define('returnBooks', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    }
    ,
    bookName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    returnedTime: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fine: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = returnBooks