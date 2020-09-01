const logger = require('winston')
const config = require('../../config')

logger.configure({
    level: config.LOG_LEVEL,
    transports: [
        new logger.transports.Console({
            format: logger.format.combine(
                logger.format.timestamp({ format: 'DD/MM/YYYY HH:mm:ss' }),
                logger.format.prettyPrint(),
                logger.format.printf(msg =>
                    logger.format.colorize().colorize(msg.level, `${msg.timestamp} - ${msg.level}: ${msg.message}`)
                )
            ),

        })
    ]
});

module.exports = logger;