var express = require('express');
var http    = require('http');

var app = express();

app.use(express.static(__dirname+"/app"));
app.use(express.static(__dirname+"/bower_components"));

app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.get('/api/affiche', function(req, res) {
  console.log('I received a GET request');

  var ficheInfo=[
    {
      id:1,
      nom:"Depuis",
      prenom:"Jean"
    },
    {
      id:2,
      nom:"Durand",
      prenom:"Christian"
    },
    {
      id:3,
      nom:"Martin",
      prenom:"Michel"
    }
  ]

  res.json(ficheInfo);
});

app.set('port', process.env.PORT || 3000);
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on : " + app.get('port'));
});

