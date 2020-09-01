const config = require('../../config')
const logger = require('../../logger')

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


if (config.APP_ENV === 'prod') {
  (async ()=>{
    const username = config.mongo.MONGO_USER
    const password = config.mongo.MONGO_PASS
    const stringConn = config.mongo.MONGO_STRING
    await mongoose.connect(`mongodb://${username}:${password}@${stringConn}`).catch(err => {
      logger.error(`CONNECTION ERR: `+err);
    })
  })(); 
  
  
}else{
    throw new Error('APP ENV NOT CONFIGURED')
}

mongoose.connection.once('open', function () {
  logger.debug('Mongo connected');
}).on('error', function (error) {
  logger.debug('Mongo Connect error ' + error);
}).on('disconnected', function () {
  logger.debug('Mongo disconnected');
})

module.exports = mongoose
