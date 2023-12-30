const express = require('express')
const { getPurchaseBook, postPurchaseBook } = require('../controllers/purchaseBookController')
const router = express.Router()

router.get('/getBooks', getPurchaseBook)
router.post('/addBook', postPurchaseBook)

module.exports = router

