const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    number: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    complement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    neighborhood: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

Address.belongsTo(User)

module.exports = Address