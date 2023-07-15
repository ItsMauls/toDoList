const express = require ('express')
const path = require ('path')
const router = express.Router()
const getDate = require('../controller/date')


router.get('/', getDate.getfullDate)
router.post('/', getDate.postFullDate)

module.exports = router