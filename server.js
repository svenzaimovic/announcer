const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()



MongoClient.connect('mongodb://admin:SSSTAdmin@ds133261.mlab.com:33261/announcer', (err, database) => {
	if (err) return console.log(err)
	db = database
	app.listen(3000, function(){
		console.log("Listening on 3000")
	})
	db.collection('quotes').find().toArray(function(err, results) {
		console.log(results)
		// send HTML file populated with quotes here
	})
})

app.use(bodyParser.urlencoded({extended: true}))

//CRUD Handlers

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/index.html')
	var cursor = db.collection('quotes').find()
	console.log(cursor)
})

app.post('/quotes', (req, res) => {
	db.collection('quotes').save(req.body, (err, result) => {
		if (err) return console.log(err)

		console.log('Saved to database')
		res.redirect('/')
	})
	console.log(req.body)
})