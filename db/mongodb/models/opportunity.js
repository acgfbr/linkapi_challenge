const mongoose = require('../connection')

const Schema = mongoose.Schema, ObjectId = Schema.ObjectId;
    const OpportunitySchema = new Schema({
    _id: ObjectId,
    opportunity_id: String,
    opportunity_name: String,
    lead_name: String,
    status: String,
    won_time: Date,
    opportunity_value: Number,
    currency: String,
    created_at: Date,
    updated_at: Date,
})

let Opportunity = mongoose.model('Opportunity', OpportunitySchema)

module.exports = Opportunity


