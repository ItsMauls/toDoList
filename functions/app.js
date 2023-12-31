const express = require ('express')
const path = require ('path')
const app = express()
const bodyParser = require('body-parser')
const todoRoutes = require('../routes/todo')
const serverless = require('serverless-http');
app.use(bodyParser.urlencoded({ extended : false }))
app.set ('views',path.join(__dirname,'views'))
app.set ('view engine', 'ejs')
app.use (express.static(path.join(__dirname,'public')))
app.use(todoRoutes)

const list = []
let isFilled = false


app.post('/',(req,res) =>{
    isFilled = true
    req.body.newList
    list.push(req.body.newList)
    console.log(list)
   
  res.redirect('/')
})

app.use('/.netlify/functions/server');  // path must route to lambda
app.use('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')))

module.exports = app;
module.exports.handler = serverless(app);
