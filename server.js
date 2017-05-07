const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.listen(3000, function(){
	console.log("Listening on 3000")
})

app.use(bodyParser.urlencoded({extended: true}))

//CRUD Handlers

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
})

app.post('/quotes', (req, res) => {
	console.log(req.body)
})