require('dotenv').config();

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  LOG_LEVEL: process.env.LOG_LEVEL,
  LOG_DRIVER: process.env.LOG_DRIVER,
  mongo: {
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PW: process.env.MONGO_PW
  },
  bling: {
    API_KEY: process.env.BLING_API_KEY
  },
  pipedrive:{
      API_KEY: process.env.PIPEDRIVE_API_KEY
  }
  
}