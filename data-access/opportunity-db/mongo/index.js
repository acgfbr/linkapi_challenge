const Opportunity = require('../../../db/mongodb/models/opportunity')
const makeOpportunity = require('../../../models/opportunity/index') 
const serialize = require('./serializer') 
const mongoose = require('mongoose')

let listOpportunities = () => {
  return Opportunity.find({})
    .then(serialize)
}

let findOpportunity = (prop, val) => {
  if (prop === 'id') {
    prop = '_id'
  }
  return Opportunity.find({[prop]: val})
    .then(resp => {
      return serialize(resp[0])
    })
}

let findOpportunitiesGroupByDay = (prop, val) => {
  return Opportunity.aggregate([
    {$group:
      {
        _id: 
          {
            day: {$dayOfMonth: "$created_at"},
            month: {$month: "$created_at"}, 
            year: {$year: "$created_at"}
          }, 
          total: {$sum: "$opportunity_value"},
          count: {$sum: 1}
       }
     },
     {$sort: {count: 1}}
])
    .then((rows)=>{
      return rows.map((row) => {
          return {
            date: `${row._id.year}-${(row._id.month<10) ? '0'+row._id.month : row._id.month}-${row._id.day < 10? '0'+row._id.day : row._id.day }`,
            total: row.total,
            quantity: row.count
          }
        })
      })
}

let addOpportunity = (opportunityInfo) => {
  let opportunity = makeOpportunity(opportunityInfo)
  let object_id = new mongoose.mongo.ObjectId();
  let newOpportunity = {
    _id : object_id,
    opportunity_id: opportunity.getOpportunityId(),
    opportunity_name: opportunity.getOpportunityName(),
    lead_name: opportunity.getLeadName(),
    status: opportunity.getStatus(),
    won_time: opportunity.getWonTime(),
    opportunity_value: opportunity.getOpportunityValue(),
    currency: opportunity.getCurrency(),
    created_at: new Date(),
    updated_at: new Date(),
  }
  return Opportunity.create(newOpportunity)
    .then(serialize)
}

let deleteOpportunity = (id) => {
  return Opportunity.findByIdAndDelete(id)
    .then(resp => {
      return {
        id: resp._id.toString(),
        status: 'success'
      }
    })
    .catch(err => {
      return {
        status: 'fail'
      }
    })
}

let dropAll = () => {
  return Opportunity.remove()
}

module.exports = {
    listOpportunities,
    findOpportunity,
    findOpportunitiesGroupByDay,
    addOpportunity,
    deleteOpportunity,
    dropAll
}

