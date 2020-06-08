import express from 'express';
import knex from './database/connection';

//importando controllers
import PointsController from './controllers/PointsController';
import ItemsController from './controllers/ItemsController';

const routes = express.Router();

//index, show, create, update, delete

//criando nova instancia da classe
const pointsController = new PointsController();
const itemsController = new ItemsController();

//Obter todos os Items
routes.get('/items', itemsController.index);

/*Rotas de Points */

//Criar um Ponto de Coleta
routes.post('/points', pointsController.create);

//Obter um Ponto de Coleta em Especifico
routes.get('/points/:id', pointsController.show);

//obter pontos de coleta a partir de cidade e estado
routes.get('/points', pointsController.index);

export default routes; 