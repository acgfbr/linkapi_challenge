const config = require('../../config')
const logger = require('../../logger')

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);


if (config.APP_ENV === 'prod') {
  
  const username = config.mongo.MONGO_USER
  const password = config.mongo.MONGO_PASS
                    
  mongoose.connect(`mongodb://${username}:${password}@cluster0-shard-00-00.pgkwm.mongodb.net:27017,cluster0-shard-00-01.pgkwm.mongodb.net:27017,cluster0-shard-00-02.pgkwm.mongodb.net:27017/linkapi?ssl=true&replicaSet=atlas-57svpj-shard-0&authSource=admin&retryWrites=true&w=majority`)
}else{
    throw new Error('APP ENV NOT CONFIGURED')
}

mongoose.connection.once('open', function () {
  logger.debug('Connection has been made');
}).on('error', function (error) {
  console.debug('Connect error', error);
}).on('disconnected', function () {
  console.debug('Connection disconnected');
})

module.exports = mongoose
