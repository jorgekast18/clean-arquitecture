const BaseBusiness = require('./base.business');
const { Point } = require('./models');

class PointBussines extends BaseBusiness {
    constructor({ PointRepository }) {
        super(PointRepository, Point);
    }
}

module.exports = PointBussines;