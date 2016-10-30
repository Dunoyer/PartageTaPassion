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
var express = require('express');
var app = express();
app.use('/lib', express.static(__dirname + '/node_modules/express'));
app.use('/lib', express.static(__dirname + '/bower_components/angular'));
app.use('/JavaScript', express.static(__dirname + '/app/scripts/controllers'));
app.get('/', function (req, res) {
  res.sendfile(__dirname + '/../app/views/index.html');
});

app.get('/api/affiche', function(req, res) {
  res.json(ficheInfo);
});

var port = 8081;
app.listen(port, function(){
  console.log('Server is listenning on http://localhost::'+ port+'/');
});


