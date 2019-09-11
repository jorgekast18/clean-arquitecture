const { Router } = require('express');

module.exports = function( { PointController }) {
    const router = Router();

    router.get('/', PointController.getPoints.bind(PointController));
    router.get('/:id', PointController.getPoint.bind(PointController));
    router.post('/', PointController.createPoints.bind(PointController)); 

    return router;
};

