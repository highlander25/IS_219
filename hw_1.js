var http = require("http"), fs = require("fs");
var events = require('events');
var eventEmitter = new events.EventEmitter();

var server = http.createServer().listen(8888);
var userAgent;
var time;
var unixTime;
var unixDate;
var headers;

  server.on('request', function(request, response){

    headers = "UNIX Timestamp, User Agent\n";
    userAgent = request.headers['user-agent'];
    time = new Date;
    unixTime = parseInt(time.getTime() / 1000);
    unixDate = new Date(unixTime * 1000);
    string = unixDate + " , " + userAgent.replace(',', '') + "\n";

    fs.exists('hw_1.csv', function(exists){
      if(!exists){

        fs.writeFile('hw_1.csv', headers, function(err){
          if (err) throw (err);
        });

      }else{

        fs.appendFile('hw_1.csv', string, function(err){
          if(err) throw(err);
        });
      }


    });

  });
