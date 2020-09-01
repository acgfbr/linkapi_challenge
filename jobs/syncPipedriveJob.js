const bling = require('../third-party/bling')
const pipedrive = require('../third-party/pipedrive')
const opportunityDb = require('../data-access/opportunity-db')


let job = module.exports = {};

job.sync = async () =>{
    const opportunities = await pipedrive.listWon();
    
    for(let i = 0; i < opportunities.length; i++){
        const opportunity = opportunities[i];
        
        const exist = await opportunityDb.findOpportunity('opportunity_id',opportunity.id);
        if(exist === null){
            await opportunityDb.addOpportunity({
                opportunity_id: opportunity.id,
                opportunity_name:opportunity.title,
                lead_name:opportunity.person_name,
                status:'won',
                won_time: opportunity.won_time,
                opportunity_value: opportunity.value,
                currency: opportunity.currency,
            })
            await bling.createOrder(opportunity.value,opportunity.person_name)
        
        }
    }
}