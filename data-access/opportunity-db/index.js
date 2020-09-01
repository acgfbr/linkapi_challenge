const {
    listOpportunities,
    findOpportunity,
    findOpportunitiesGroupByDay,
    addOpportunity,
    deleteOpportunity,
    dropAll
  } 
   = require('./mongo/index')
  
  
   const opportunitiesDb = {
    listOpportunities,
    findOpportunity,
    findOpportunitiesGroupByDay,
    addOpportunity,
    deleteOpportunity,
    dropAll
  }
  
  module.exports = opportunitiesDb
  