const {DataTypes} = require('sequelize')

const db = require('../db/conn')

const User = require('./User')

const Address = db.define('Address', {
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

User.hasMany(Address)
Address.belongsTo(User)

module.exports = Address