// lucs@sabayon ~/tmp/ProberRequestNodeJs $ npm install --save request
var request = require("request");

// http://stackoverflow.com/questions/10888610/ignore-invalid-self-signed-ssl-certificate-in-node-js-with-https-request
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var options = {method: 'GET',
	url: 'https://web-ims.thomasmore.be/datadistribution/API/2.0/drones',
	qs: {format: 'json'},
	headers:
		{authorization: 'Basic aW1zOno1MTJtVDRKeVgwUExXZw=='}};

request(options, function (error, response, body) {
	if (error)
		throw new Error(error);

	console.log(body);
});


console.log("Hello World!");