require('dotenv').config();

const PRDUCTION = require('./production');
const DEVELOP = require('./develop');

const { NODE_ENV } = process.env;

let currentENV = DEVELOP;

currentENV = NODE_ENV === 'production' ? PRODUCTION : DEVELOP;

module.exports = currentENV;