const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'meta', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3307,    
})

try {
    sequelize.authenticate();
    console.log('Conextamos com sucesso o Sequelize');  
} catch (error) {
    console.log('Erro ao estabelecer conexão com o banco de dados:', error);    
}

module.exports = sequelize