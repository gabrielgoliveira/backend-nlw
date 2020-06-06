import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Gabriel',
        'Diego'
    ]);
});

/*
Pacotes:
    ts-node -D

npm vs npx

npx: Serve para executar um pacote que foi instalado, 
geralmente esses packs se encontra na pasta node_modules/bin

Para executar a aplicação utilizando npx

npx ts-node src/server.js

npx ts-node-dev src/server.js
  - ts-node-dev tem live reload

  para executar npm run dev 
*/

/*
    Rotas vs Recursos

        Rotas: Endereço completo da requisição
        Recursos: Qual entidade estamos acessando do sistema

    Metodos HTTP:

        GET: Buscar Informações
        POST: Criar informações no BACK
        PUT: Atualizar
        DELETE: Deletar


    Tipos de Parametros:

        1) Request Params: São parametros que vem na propria rota e identifica um recurso

            '/users/:id' : Dois pontos informa que id é
            um parametro que está sendo recebido pela url


            app.get('/users/:id', (request, response) => {
                const id = Number(request.params.id);
                if(id >= users.length){
                    return response.send('Parametro Invalido!!');
                } else {
                    return response.json(users[id]);
                }
            });

        2) Query Params
            Pode ser passado um array tambem:

                ?search=el&search=ga

            app.get('/users', (request, response) => {
        
                Query Params tambem vai na url, a diferença é que
                ele geralmente é opcional e a rota sobrevive sem ele
                Ex:

                    localhost:3333/user?search=on
            
                const search = String(request.query.search);

                if(search){
                    var filteredUsers = users.filter(user => {
                        if(user.includes(search)){
                            return true;
                        }
                    });
                    return response.json(filteredUsers);
                } else {
                    return users;
                }    
            });

    
            3) Request Body

                Serve para gravação e atualização de recursos
*/


app.listen(3333);