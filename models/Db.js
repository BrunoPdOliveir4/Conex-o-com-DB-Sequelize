const { Sequelize } = require("sequelize")
//Conexão do banco de dados já criado através de um CREATE DATABASE 'x'
const sequelize = new Sequelize('paragithub', 'login', 'senha', {
    host: "localhost",
    dialect: 'mysel',
    query:{raw:true}
})


/*Pode se usar um sequelize authenticate também para verificar se foi conectado com sucesso

sequelize.authenticate().then(function(){console.log('conectado com sucesso')}).catch(function(erro){console.log('falha ao se conectar.' + erro)})

*/

/*
criar tables:

const Dados = sequelize.define('nomedatabela', {
    coluna1: {
        type: sequelize.STRING //Que seria um varchar naturalmente
    },
    coluna2: {
        type: sequelize.TEXT //Formato de texto
    }
})

//Para definir que a tabela será criada:
Dados.sync({force:true})
*/

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}