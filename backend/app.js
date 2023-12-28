// importing express
const express = require('express')
const bodyparser = require('body-parser')


const app = express()



app.listen(5000, () => {
    console.log('App started')
})