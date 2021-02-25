var express = require('express')

//express server start
var app = express()

// third party body parser
// var bodyParser = require('body-parser')

//serving static file 
//connecting the html with the express server
app.use(express.static(__dirname))
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({extended: false}))

var messages = [
    {name: 'Sana', message: 'Hi'},
    {name: 'Jana', message: 'Hello'}
]
//handing get request for getting data from backend
app.get('/messages', (req, res) =>{
    //res---reference to the response
    res.send(messages)
})

//post request from post man (postman to frontend)
app.post('/messages', (req, res) =>{
    console.log("test",req.body)
    messages.push(req.body)
    res.sendStatus(200)
})
//server at 3000 port with a message
var server = app.listen(3000, () => {
    console.log('server is listening on port', server.address().port)
})