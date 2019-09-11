const { Router } = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const compression = require('compression');

module.exports = function ({ PointRoutes }){
    const router = Router();
    const apiRoutes = Router();

    apiRoutes
        .use(cors())
        .use(bodyParser.json())
        .use(compression());

    apiRoutes.use('/point', PointRoutes);
    router.use('/api', apiRoutes);

    return router;
}