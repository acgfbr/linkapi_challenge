const config = require('../../config')
const logger = require('../../logger')

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


if (config.APP_ENV === 'prod') {
  
  const username = config.mongo.MONGO_USER
  const password = config.mongo.MONGO_PASS
  const stringConn = config.mongo.MONGO_STRING
     
  mongoose.connect(`mongodb://${username}:${password}@${stringConn}`, { connectTimeoutMS: 1000, serverSelectionTimeoutMS: 1000}).catch(err => {
    logger.error(`CONNECTION ERR: `+err);
  })
  
}else{
    throw new Error('APP ENV NOT CONFIGURED')
}

mongoose.connection.once('open', function () {
  logger.debug('Connection has been made');
}).on('error', function (error) {
  logger.debug('Connect error ' + error);
}).on('disconnected', function () {
  logger.debug('Connection disconnected');
})

module.exports = mongoose
