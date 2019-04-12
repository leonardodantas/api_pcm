const express = require('express')
const consign = require('consign')
const body_parser = require('body-parser')

const app = express()

app.use(body_parser.urlencoded({extended : true}))
app.use(body_parser.json())

consign().include('app/routes')
.then('config/dbConnection.js')
    .then('app/controller')
    .then('app/models')
    .into(app)

module.exports = app