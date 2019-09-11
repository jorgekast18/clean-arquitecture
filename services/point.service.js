const BaseService = require('./base.service');

class PointService extends BaseService {
     
    constructor({ PointBusiness }) {
        super(PointBusiness);
    }
}

module.exports = PointService;