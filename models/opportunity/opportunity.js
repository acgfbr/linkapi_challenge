let buildMakeOpportunity = function(opportunityValidator = null) {
    return ({
        opportunity_id,
        opportunity_name,
        lead_name,
        status,
        won_time,
        opportunity_value,
        currency,
        created_at,
        updated_at
    } = {}) => {
      
        // if necessary a validator can be placed here, I didn't do it because the challenge of the link api is with a short time
  
      return {
        getOpportunityId: () => opportunity_id,
        getOpportunityName: () => opportunity_name,
        getLeadName: () => lead_name,
        getStatus: () => status,
        getWonTime: () => won_time,
        getOpportunityValue: () => opportunity_value,
        getCurrency: () => currency,
        getCreatedAt: () => created_at,
        getUpdatedAt: () => updated_at
      }
    }
  }
  
  module.exports = buildMakeOpportunity
