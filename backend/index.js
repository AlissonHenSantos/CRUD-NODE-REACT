const express = require('express')
const app = express()
const consign = require('consign')
const db = require('./config/db')

app.db = db

consign()
.then('./config/middlewares.js')
.then('./api/user.js')
.then('./config/routes.js')

.into(app)




app.listen(3000, ()=> {
    console.log('app rodando na porta 3000')
})