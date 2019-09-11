const mapper = require('automapper-js');
const { PointDto } = require('../dto');

class PointController {

    constructor({ PointService }){
        this._pointService = PointService
    }
    
    async getPoints(req, res) {
        let points = await this._pointService.getAll();
        points = points.map(point => mapper(PointDto, point))
        return res.send({ 
            payload: points
        });
    }

    async getPoint(req, res) {
        const { id } = req.params;
        let point = await this._pointService.get(id);
        
        if(!point) {
            return res.status(404).send();
        }

        point = mapper(PointDto, point);
        
        return res.send({ 
            payload: point
        });
    }

    async createPoints(req, res) {
        const { body } = req;
        const createPoint = await this._pointService.create(body);
        const point = mapper(PointDto, createPoint);
        return res.status(201).send({
            payload: point
        })
    }
}

module.exports = PointController;