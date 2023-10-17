const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Adress = db.define('adress', {
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    state: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    country: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

Adress.belongsTo(User)

module.exports = Adress