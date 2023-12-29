const express = require('express')
const { postPurchaseProduct, getPurchaseProduct } = require('../controllers/purchaseBookController')
const router = express.Router()

router.get('/getBooks', getPurchaseProduct)
router.post('/addBook', postPurchaseProduct)

module.exports = router

