import express from 'express';

const app = express();

const users = [
    'Gabriel',
    'Daniel',
    'Joaquim'
];

     
app.get('/users', (request, response) => {
    /*
    Query Params tambem vai na url, a diferença é que
    ele geralmente é opcional e a rota sobrevive sem ele
    Ex:

        localhost:3333/user?search=on
    */
    const search = String(request.query.search);
    console.log(search);
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


app.listen(3333);