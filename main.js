// lucs@sabayon ~/tmp/ProberRequestNodeJs $ npm install --save request
var request = require("request");

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

var dronesSettings = new Settings("/drones?format=json");

var droneMem = [];

request(dronesSettings, function (error, response, drones) {
	console.log(drones);
	drones.forEach(function (drone) {
		var droneSettings = new Settings("/drones/" + drone.id + "?format=json")
		request(droneSettings, function (error, response, drone) {
			console.log(drone);
			console.log("***************************************************************************");
		});
	});
});

console.log("Hello World!");