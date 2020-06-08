import Knex from 'knex';

//recebe a instancia de acesso ao bd
export async function up(knex: Knex){
    //CRIAR TABELA
    
    /*Parametros de createTable: 
        1) nome_tabela
        2) função que recebe como parametro a referencia 
        da tabela

    */
    return knex.schema.createTable('points', table => {
        //aqui vem a definição dos campos da tabela
        table.increments('id').primary;
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
}

export async function down(knex: Knex){
    //Voltar atrás (DELETAR TABELA)
    return knex.schema.dropTable('points');
}
