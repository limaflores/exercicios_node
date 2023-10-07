const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('nodesequelize2', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'    
})

try {
    sequelize.authenticate();
    console.log('Conextamos com sucesso o Sequelize');  
} catch (error) {
    console.log('Erro ao estabelecer conexão com o banco de dados:', error);    
}

module.exports = sequelize