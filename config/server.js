const express = require('express')
const consign = require('consign')
const body_parser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(cors())

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Credentials', '*');
    res.header('Access-Control-Expose-Headers', 'x-access-token'); //essta linha habilita o token no header
    next();
  });

app.use(body_parser.urlencoded({extended : true}))
app.use(body_parser.json())

consign().include('app/routes')
.then('config/dbConnection.js')
    .then('app/controller')
    .then('app/models')
    .into(app)

module.exports = app