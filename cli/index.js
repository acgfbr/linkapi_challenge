const args = require('yargs-parser')(process.argv.slice(2))
const opportunityDb = require('../data-access/opportunity-db/index')
const pipedrive = require('../third-party/pipedrive');

const printHelp = function () {
  console.log(`
    Help usage:
    --list  list opportunities
    --seed  insert fake opportunity
    --group list opportunities grouped by day
    --listAllPipedrive list all pipedrive
    --help   print help
  `);
}

let valid = args.list || args.seed || args.group || args.listAllPipedrive

if (args.help || !valid) {
  printHelp()
  process.exit(1)
}

if (args.list) {
    opportunityDb.listOpportunities().then(data => {
        console.log(data);
        process.exit(1)
    })
}
if(args.seed){
    opportunityDb.addOpportunity({
        opportunity_id: 1234,
        opportunity_name:'testando',
        lead_name:'antonio',
        status:'won',
        won_time: new Date(),
        opportunity_value: 3333.34,
        currency: 'BRL',
    }).then(data => { console.log(data);
    process.exit(1);
    });
}
if(args.group){
    opportunityDb.findOpportunitiesGroupByDay().then(data => {
        console.log(data);
        process.exit(1)
    });
}

if(args.listAllPipedrive){
    (async ()=>{
        let response = await pipedrive.listAll();
        console.log(response)
        process.exit(1)
    })();
    
}