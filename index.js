
var express = require('express');
//general lib
var app = express();
//inspect
var util = require('util');
//Cross-Origin Resource Sharing (CORS), used for enabling pre-flight option
cors = require('cors');

//astronauti
var astronauti = require('./astronautiman.js');

//POST
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));//set to true since we want to parse nested objects in the JSON we receive
app.use(bodyParser.json());// JSON

//set up the server
app.set('port', (process.env.PORT || 5000));
//enable pre-flight authoriuzation
app.options('*', cors());

/**
 * @brief returns a static welcome page.
 * @return a static page.
 */
app.get('/', function(request, response) {
	var headers = {};
	//answer
	headers["Content-Type"] = "text/html";
	response.writeHead(200, headers);
	response.end("Welcome dear customer");
});





/**
 * @brief returns the content pf warehouse
 * @return a static page.
 */
 
 
 app.post('/showAstronauti', function(request, response) 
{
	var headers = {};
	headers["Access-Control-Allow-Origin"] = "*";
	headers["Access-Control-Allow-Methods"] = "POST, GET, PUT, DELETE, OPTIONS";
	headers["Access-Control-Allow-Credentials"] = false;
	headers["Access-Control-Max-Age"] = '86400'; // 24 hours
	headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept";
	headers["Content-Type"] = "application/json";
  
	
    
	
	//check body and parameters
	if ( typeof request.body !== 'undefined' && request.body)
	{
        //read items
        
        //ItemId
		var items = astronauti;
		
		
		if (items != null)
		{
			response.writeHead(200, headers);
			response.end(JSON.stringify(items));
		}
		else
		{
			response.writeHead(404, headers);
			response.end(JSON.stringify());
		}
        
        
        
		
	
	}
	else
	{
		//unaceptable input
		response.writeHead(406, headers);
		response.end(JSON.stringify("1"));
		console.log("siamo qui");
	}
    

});

var astronauti = [
    {
		ID: 1,
        name: "elvis",
		cognome: "nazifi",
		isinspace: 0,
        
	},
	
	{
		ID: 2,
        name: "endrit",
		cognome: "nazifi",
		isinspace: 0,
        
	},
	
	{
		ID: 3,
        name: "mario",
		cognome: "elfi",
		isinspace: 1,
        
	},
	
	{
		ID: 4,
        name: "aston",
		cognome: "martin",
		isinspace: 1,
        
	},
    
    
];
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
 
 