const express = require('express')
const { getReturnBooks, postReturnBook } = require('../controllers/returnBookController')
const router = express.Router()

router.post('/addBook', postReturnBook)
router.get('/getBooks', getReturnBooks)

module.exports = router