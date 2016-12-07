var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/prober';

MongoClient.connect(url, function (error, db) {
	if (error)
		throw new Error(error);

	console.log("Connected successfully to server");

	db.close();
});

