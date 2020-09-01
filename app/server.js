const logger = require('../logger');

logger.info('INITIATING LOGGING SERVICE');
logger.debug('INITIATING LOGGING SERVICE');
logger.error('INITIATING LOGGING SERVICE');
logger.warn('INITIATING LOGGING SERVICE');

const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const routes = require('./routes')
const config = require('../config')

app.use(bodyParser.json());
app.use(routes)

// basic middleware
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.message)
    if (!err.statusCode) {
      err.statusCode = 500
    }
    // if status code not setted, its a server error
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.message
    })
  }

  next()
})

// 404 middleware
app.use(function (req, res) {
  res.status(404).json({
    status: 'Page does not exist'
  });
});


const PORT = config.PORT || 3000

app.listen(PORT, () => {
    logger.info('----------------------------');
    logger.info(`Listening on PORT: ${PORT}`);
    logger.info('----------------------------');
})

