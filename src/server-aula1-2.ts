import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Daniel',
        'Diego'
    ]);
});
//teste
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




app.listen(3333);