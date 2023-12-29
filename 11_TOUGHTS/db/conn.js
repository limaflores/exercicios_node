const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('toughts2', 'meta', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,    
})

try {
    sequelize.authenticate()
    console.log('Connection has been established successfully.')
} catch (error) {
    console.error(`Unable to connect to the database: ${error}`)
}

module.exports = sequelize
