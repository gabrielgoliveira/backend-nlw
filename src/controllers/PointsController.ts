import knex from '../database/connection';
import {Request, Response} from 'express';


class PointsController {
    async index(request: Request, response: Response){
        //filtros: cidade, uf, items (Query Params)

        const {city, uf, items} = request.query;
        
        const parsedItems = String(items).split(',').map(item => Number(item.trim())); 
        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');
        return response.json(points); 
    }
    async create(request: Request, response: Response){
        const {
            name,
            email, 
            whatsapp,
            latitude,
            longitude,
            city,
            uf,
            items
        } = request.body;
    
        const point = {
            image: 'image-fake',
            name,
            email,
            whatsapp,
            latitude,
            longitude,
            city,
            uf
        }

        const PointIds = await knex('points').insert(point);
    
        const pointItems = items.map((item: number) => {
            return {
                point_id: PointIds[0],
                item_id: item
            }
        });
    
        await knex('point_items').insert(pointItems);
    
        return response.json({
            id:PointIds[0],
            ...point,
            relacoes: pointItems
        });
    }

    async show(request: Request, response: Response){
        const idPoint = request.params.id;
        const point = await knex('points').select('*').where('id', idPoint).first();

        if(!point) {
            return response.status(400).json({
                message:'Point not found'
            });
        }
        /**
         * SELECT * FROM items
         *  JOIN point_items ON items.id = point_items.item_id
         *  WHERE point_items.point_id = id 
         */

        const items = await knex('items')
        .join('point_items', 'items.id', '=', 'point_items.item_id')
        .where('point_items.point_id', idPoint);
        
        return response.json({
            ...point,
            items
        });
    }
}

export default PointsController;