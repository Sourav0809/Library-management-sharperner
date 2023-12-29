// importing express
const express = require('express')
const bodyparser = require('body-parser')
const cors = require("cors")
const db = require('./util/database')
const app = express()

app.use(cors())
app.use(bodyparser.urlencoded({ extended: false }))

// Sync all models
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