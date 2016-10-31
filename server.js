var express = require('express');
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

var port = 3000;
app.listen(port, function(){
  console.log('Server is listenning on http://localhost:'+ port+'/');
});


