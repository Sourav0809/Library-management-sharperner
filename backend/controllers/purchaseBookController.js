const purchaseBookModel = require('../models/purchaseBooksModel')

const purchaseBookController = {
    getPurchaseProduct(req, res) {
        purchaseBookModel.findAll()
            .then((books) => {
                res.send(books)
            })
            .catch(err => console.log(err))
    }
    ,
    postPurchaseProduct(req, res) {
        const bookName = req.body.bookName
        const purchaseTime = req.body.purchaseTime
        const expireTime = req.body.expireTime

        purchaseBookModel.create({
            bookName: bookName,
            purchaseTime: purchaseTime,
            expireTime: expireTime
        })
            .then((val) => {
                res.send({ STATUS: 'ADDED', id: val.id })
            })
    }
}





module.exports = purchaseBookController
