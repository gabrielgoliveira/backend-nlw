import path from 'path';

module.exports = {
    client:'sqlite3',
    connection: {
        //caminho do arquivo
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        //define em que pasta está as migrations
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        //define em que pasta está as migrations
        directory: path.resolve(__dirname, 'src', 'database', 'migrations', 'seeds')
    },
    useNullAsDefault: true,

};