module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: '',
    database: 'protocolong',


    define: {
        timestamp: true,  //adiciona created_at e updated_at nas tabelas
        underscored: true, //define o uso de snack_case para o banco (pessoa_nome)
    }
}