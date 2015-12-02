var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.get('/', function(req, res) {
  res.send('Hello World!');
});
    app.get('/entry/:id', function(req, res) {
      console.log(req.params);
      if (end[req.params.id]) {
        res.json(end[req.params.id])
      }
      else {
        res.status(404).send();
      }
    })

app.use(bodyParser.json());

var end = {};

var counter = 1;

app.post('/entry', function(req, res) {
      counter++;
      req.body.id = counter;
      end[Number(req.body.id)] = req.body;
      console.log(end)
    });





    /* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

    // Boilerplate code to start up the web server
    var server = app.listen(process.env.PORT, process.env.IP, function() {
      var host = server.address().address;
      var port = server.address().port;

      console.log('Example app listening at http://%s:%s', host, port);
    });
