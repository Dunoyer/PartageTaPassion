var express = require('express');
var http    = require('http');
var mysql   = require('mysql');

// Connexion à la base de données
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  port     : 3307,
  database : 'partagetapassionbdd'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting database: ' + err.stack);
    return;
  }

  console.log('Database MySQL connected as id ' + connection.threadId);
});

connection.end(function(err){
  if (err) {
    console.error('error disconnection database: ' + err.stack);
    return;
  }

  console.log('Database MySQL disconnected with succefully');
});

var app = express();

app.use(express.static(__dirname+"/app"));
app.use(express.static(__dirname+"/bower_components"));

// URL's
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.post('/api/authentification', function(req, res){

});

//Exemple
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

