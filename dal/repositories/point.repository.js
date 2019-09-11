const BaseRepository = require('./base.repository');

class PointRepository extends BaseRepository {
    constructor({ db }) {
        super(db, 'Point')
    }
}

module.exports = PointRepository;