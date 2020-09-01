const _serializeSingle = (opportunity) => {
    return {
        'id': opportunity._id,
        'opportunity_id': opportunity.opportunity_id,
        'opportunity_name': opportunity.opportunity_name,
        'lead_name': opportunity.lead_name,
        'status': opportunity.status,
        'won_time': opportunity.won_time,
        'opportunity_value': opportunity.opportunity_value,
        'currency': opportunity.currency,
        'created_at': opportunity.created_at,
        'updated_at': opportunity.updated_at
    };
  };

  
  const serializer = (data) => {
    if (!data) {
      return null
    }
    if (Array.isArray(data)) {
      return data.map(_serializeSingle)
    }
    return _serializeSingle(data)
  }
  
  module.exports = serializer
  