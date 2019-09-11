const { asClass, createContainer, asFunction, asValue} = require('awilix');

const StartUp = require('./startup');
const Server = require('./server');
const container = createContainer();

// Config
const config = require('../config/enviroments'); 

// Controllers
const { PointController } = require('../api/controllers');

// Routes
const Routes = require('../api/routes');
const PointRoutes = require('../api/routes/points.routes');

// Services
const { PointService } = require('../services/');

// Business
const { PointBusiness } = require('../domain');

// Repositories
const { PointRepository } = require('../dal/repositories');

// Db
const db = require('../dal/models');

container
    // Api
    .register({
        app: asClass(StartUp).singleton(),
        server: asClass(Server).singleton(),
        PointController: asClass(PointController).singleton(),
        router: asFunction(Routes).singleton(),
        PointRoutes: asFunction(PointRoutes).singleton()
    })
    // Config
    .register({
        config: asValue(config)
    })
    // Db
    .register({
        db: asValue(db)
    })
    // Services
    .register({
        PointService: asClass(PointService).singleton()
    })
    // Business
    .register({
        PointBusiness: asClass(PointBusiness).singleton()
    })
    // Repository
    .register({
        PointRepository: asClass(PointRepository).singleton()
    })



module.exports = container;