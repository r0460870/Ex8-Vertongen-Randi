var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/prober';


var dal = {

	connect: function (err, result) {
		MongoClient.connect(url, function (error, db) {
			if (error)
				throw new Error(error);
			console.log("Connected successfully to server");
			result(db);
		});		
	},
	
	insertDrone: function (drone, callback) {
		this.connect(null, function (db) {
			db.collection('drones').insert(drone, function (err, result)  {
				//callback(result);
				db.close();
			});
		});
	}
};

	module.exports = dal;