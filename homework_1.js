var http = require("http"), fs = require("fs");
var events = require('events');
var eventEmitter = new events.EventEmitter();

var server = http.createServer().listen(8888);
var userAgent;
var time = 

	server.on('request', function(request, response){
		
		userAgent = request.headers['user-agent'];

		
		

		if(!'homework_1'){		
			fs.writeFile('homework_1', userAgent, function(err){
				
				if (err) throw(err);
				
				console.log('The file was created');
				
			});
		} else{
			
				fs.appendFile('homework_1', userAgent, function(err){

					if (err) throw(err);

					console.log("The data was added to the file");
				});
			}





	});
	