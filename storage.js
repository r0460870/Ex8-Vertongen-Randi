var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/prober';

var database = null;

var dal = {

	connect: function (err, result) {
		MongoClient.connect(url, function (error, db) {
			if (error)
				throw new Error(error);
			console.log("Connected successfully to server");
			result(db);
		});
		
		while(!this.isConnected())
		{
			
		}
	},
	isConnected: function() {
		return database !== null;
	},
	insertDrone: function (drone, callback) {
		this.connect(null, (db) => {
			this.db.collection('drones').insert(drone, (err, result) => {
				callback(result);
			});
		})
	}
}

	module.exports = dal;