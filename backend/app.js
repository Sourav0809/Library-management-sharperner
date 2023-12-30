// imports 
const express = require('express')
const bodyparser = require('body-parser')
const cors = require("cors")
const app = express()

//importing database
const db = require('./util/database')

// importing routes
const purchaseBooksRoutes = require('./routes/purchaseBooksRoutes')
const returnBooksRoutes = require('./routes/returnBooksRoutes')


// applying middlewares
app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))
app.use(express.json())

// applying routes
app.use('/purchase', purchaseBooksRoutes)
app.use('/return', returnBooksRoutes)





// Sync all model
db.sync()
    .then(() => {
        console.log('All tables synced successfully');
        app.listen(5000, () => {
            console.log('App Started ...');
        });
    })
    .catch((error) => {
        console.error('Error syncing tables:', error);
    });