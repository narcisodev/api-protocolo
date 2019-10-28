module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'nag204gmg',
    database: 'protocolo',

   
    define: {
        timestamp: true,  //adiciona created_at e updated_at nas tabelas
        underscored: true, //define o uso de snack_case para o banco (pessoa_nome)
    }
}