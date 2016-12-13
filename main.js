// >$ npm install request --save
var request = require("request");
var dal = require('./storage.js');

// http://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


var BASE_URL = "https://web-ims.thomasmore.be/datadistribution/API/2.0";
var Settings = function (url) {
	this.url = BASE_URL + url;
	this.method = "GET";
	this.qs = {format: 'json'};
	this.headers = {
		authorization: "Basic aW1zOno1MTJtVDRKeVgwUExXZw=="
	};
};

var Drone = function (id, name, mac) {
	this._id = id
	this.name = name;
	this.mac = mac;
};
var File = function (id,  date_first_record, date_last_record, date_loaded, contents_count){
this.id = id;
};

var Content = function (id, mac_address, datetime) {
    this._id = id;
    this.mac_address = mac_address;
    this.datetime = datetime;
    this.rssi = rssi;
    this.ref = ref;
    this.url = url

};


var dronesSettings = new Settings("/drones?format=json");
var filesSettings = new Settings("/files?format=json");
dal.clearDrone();

request(dronesSettings, function (error, response, dronesString) {
	var drones = JSON.parse(dronesString);
	console.log(drones);
	console.log("***************************************************************************");
	drones.forEach(function (drone) {
		var droneSettings = new Settings("/drones/" + drone.id + "?format=json");
		request(droneSettings, function (error, response, droneString) {
			var drone = JSON.parse(droneString);
			dal.insertDrone(new Drone(drone.id, drone.name, drone.mac_address));
		});
	});
});

request(filesSettings, function (error, response, fileString) {
	var files = JSON.parse(fileString);
	console.log(files);
		console.log("test");
	console.log("***************************************************************************");
	drones.forEach(function (file) {
		var filesettings = new Settings("/files/" + file.id + "?format=json");
		request(filesettings, function (error, response, fileString) {
			var file = JSON.parse(fileString);
			dal.insertFile(new File(file.id));
		});
	});
});


console.log("Hello World!");
