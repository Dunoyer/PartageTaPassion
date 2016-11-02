var http    = require('http');
var express = require('express');
var bodyParser = require('body-parser');

var app     = express();

/*
 * Connexion à la base de données
 */
var mysql   = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'admin',
  port     : 3306,
  database : 'partagetapassionbdd'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting database: ' + err.stack);
    return;
  }

  console.log('Database MySQL connected as id ' + connection.threadId);
});

/*
 * Import
 */
app.use(express.static(__dirname+"/app"));
app.use(express.static(__dirname+"/bower_components"));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json()); //Parse le texte en JSON et expose le résultat de l'objet a req.body

/*
 * Connection serveur
 */
app.set('port', process.env.PORT || 3000);
var server = http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on : " + app.get('port'));

  server.on('close', function(){
    console.log("Server turn down with success !.");

    connection.end(function(err){
      if (err) {
        console.error('error disconnection database: ' + err.stack);
        return;
      }
      console.log('Database MySQL disconnected with succefully');
    });

    server.close(); // Arret du server
  });
});

/*
 * URL's
 */
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/app/index.html');
});

app.post('/api/authentification', function(req, res){

  var mail = req.body.email;
  var pwd  = req.body.password;
  var queryString = 'SELECT * FROM utilisateurs WHERE email = ? and password = ?';

  connection.query(queryString, [mail, pwd],function(err, result) {
    if (err) throw err;

    res.json(result[0]); // Résultat de la requête
  })
});

app.post('/api/contenu', function(req, res){

  var queryString = 'SELECT * FROM contenu';

  connection.query(queryString,function(err, result) {
    if (err) throw err;

    res.json(result); // Résultat de la requête
  })
});
