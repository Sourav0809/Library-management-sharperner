const returnBookModel = require('../models/returnBooksModel')
const purchaseBookModel = require('../models/purchaseBooksModel')
const purchaseBookController = {
    getReturnBooks(req, res) {
        console.log('hello')
        returnBookModel.findAll()
            .then((books) => {
                console.log(books)
                res.send(books)
            })
            .catch(err => (console.log(err)))
    }
    ,
    postReturnBook(req, res) {
        const bookName = req.body.bookName
        const returnedTime = req.body.returnedTime
        const fine = req.body.fine
        const id = req.body.id
        let createdBookid;
        console.log(typeof (returnedTime))
        returnBookModel.create({
            bookName, returnedTime, fine
        })
            .then((createdBook) => {
                createdBookid = createdBook.id
                return purchaseBookModel.findAll({ where: { id: id } })
            })
            .then((books) => {
                const findedbook = books[0]
                return findedbook.destroy()
            })
            .then((books) => {
                res.send({ status: "Return Done", id: createdBookid })
            })
            .catch(err => console.log(err))
    }
}





module.exports = purchaseBookController
