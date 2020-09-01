require('dotenv').config();

module.exports = {
  APP_ENV: process.env.APP_ENV,
  PORT: process.env.PORT,
  LOG_LEVEL: process.env.LOG_LEVEL,
  LOG_DRIVER: process.env.LOG_DRIVER,
  mongo: {
    MONGO_STRING: process.env.MONGO_STRING,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASS: process.env.MONGO_PASS
  },
  bling: {
    API_KEY: process.env.BLING_API_KEY
  },
  pipedrive:{
      API_KEY: process.env.PIPEDRIVE_API_KEY
  }
  
}