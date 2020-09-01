let opportunityDb = require('../../data-access/opportunity-db')

let opportunity = module.exports = {}

opportunity.list = (req, res, next) => {
    opportunityDb.listOpportunities()
    .then(data => {
      res.send(data)
    })
}

opportunity.groupByDay = (req, res, next) => {
    opportunityDb.findOpportunitiesGroupByDay()
    .then(data => {
      res.send(data)
    })
}