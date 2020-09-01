const express = require('express')
const router = express.Router()

const opportunities = require('./opportunities')

router.get('/list', opportunities.list)
router.get('/totalByDay', opportunities.groupByDay)

module.exports = router