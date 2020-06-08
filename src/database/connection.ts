import knex from 'knex';
import path from 'path';


const connection = knex({
    //definindo as configurações de conexão com o bd
    client:'sqlite3',
    connection: {
        //caminho do arquivo
        filename: path.resolve(__dirname, 'database.sqlite'),
    },
    useNullAsDefault: true,
});

export default connection;