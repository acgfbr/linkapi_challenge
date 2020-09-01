const cron = require('node-cron')
const logger = require('../logger')
const config = require('../config')
const pipeJob = require('../jobs/syncPipedriveJob')

var
  Queue = require('bull'),
  cluster = require('cluster');

var numWorkers = 1;
var queue = new Queue("pipedrive_bling_integration",{ redis:{host: config.redis.host, port: config.redis.port}});

if(cluster.isMaster){

    queue.add({type: 'pipesync'});

    cron.schedule("* * * * *", async () => {
        logger.debug('CRON SYNC PIPEDRIVE ~ BLING');
        queue.add({type: 'pipesync'});
    });

    for (var i = 0; i < numWorkers; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', function(worker, code, signal) {
        logger.debug('worker ' + worker.process.pid + ' died');
    });
}else{
    queue.process(async function(job, jobDone){
        switch(job.data.type){
            case'pipesync':
                await pipeJob.sync();
            break;
        }

        logger.info(`Job done by worker ${cluster.worker.id} | job id: ${job.id}`);
        jobDone();
    });
}