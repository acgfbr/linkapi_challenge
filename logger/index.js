const config = require('../config');


let logger = module.exports = {};


switch(config.LOG_DRIVER){
    case 'memory':
        const winston = require('./winston');
        logger.info = (text) => {
            winston.info(text);
        }
        logger.debug = (text) => {
            winston.debug(text);
        }
        logger.error = (text) => {
            winston.error(text);
        }
        logger.warn = (text) => {
            winston.warn(text);
        }
        break;
    case 'database':
        throw new Error('not implemented');
    case 'elasticsearch':
        throw new Error('not implemented');
}