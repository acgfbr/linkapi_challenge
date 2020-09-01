let chai = require('chai');
let expect = chai.expect;
let opportunityDb = require('./index')

describe('opportunityDb', () => {
  beforeEach(async () => {
    await opportunityDb.dropAll();
    let uno = {
        opportunity_id: 1234,
        opportunity_name:'testando',
        lead_name:'antonio',
        status:'won',
        won_time: new Date(),
        opportunity_value: 3333.34,
        currency: 'BRL',
    }
    let duo = {
        opportunity_id: 4321,
        opportunity_name:'testando 123',
        lead_name:'antonio',
        status:'won',
        won_time: new Date(),
        opportunity_value: 6698.34,
        currency: 'BRL',
    }
    await opportunityDb.addOpportunity(uno)
    await opportunityDb.addOpportunity(duo)
  })

  it('drops database', async () => {
    await opportunityDb.dropAll()
    let opportunities = await opportunityDb.listOpportunities()
    let input = opportunities.length
    let actual = 0
    expect(input).to.equal(actual)
  })

  it('lists opportunities', async () => {
    let input = await opportunityDb.listOpportunities()
    let actual = 2
    expect(input.length).to.equal(actual)
  })

  it('find opportunity by opportunity_id', async () => {
    let opportunity = await opportunityDb.findOpportunity('opportunity_id', 1234)
    let id = opportunity.id

    let opportunity2 = await opportunityDb.findOpportunity('id', id)
    let input = opportunity2.id
    let actual = id
    expect(input).to.eql(actual)
  })

  it('delete a opportunity', async () => {
    let opportunity = await opportunityDb.listOpportunities()
    let id = opportunity[0].id.toString()
    let validInput = await opportunityDb.deleteOpportunity(id)
    let validActual = {
      status: 'success',
      id
    }
    expect(validInput).to.eql(validActual)

    let newOpportunity = await opportunityDb.listOpportunities()
    let inputLength = newOpportunity.length
    let actualLength = 1
    expect(inputLength).to.equal(actualLength)

    let invalidInput = await opportunityDb.deleteOpportunity(42)
    let invalidActual = {
      status: 'fail'
    }
    expect(invalidInput).to.eql(invalidActual)    
  })

})