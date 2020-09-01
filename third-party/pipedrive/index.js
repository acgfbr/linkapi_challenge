
const config = require('../../config')
const pipedriveSDK = require('pipedrive')
pipedriveSDK.Configuration.apiToken = config.pipedrive.API_KEY

let pipedrive = module.exports = {}


pipedrive.listWon = async () => {
  const controller = pipedriveSDK.DealsController
  const response = await controller.getAllDeals({ 
    status: 'won'
  });
  return response.data;
}

pipedrive.listAll = async () => {
  const controller = pipedriveSDK.DealsController
  const response = await controller.getAllDeals({});
  return response.data;
}
