var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.get('/hello/:firstname', function (req, res) {
  var name = req.params.firstname;
  res.send('<h1>Hello' + name + '</h1>');
});
app.get('/op/:operation/:number1/:number2', function (req, res) {
  var add = {
    operator: req.params.operation,
    operand1: parseInt(req.params.number1),
    operand2: parseInt(req.params.number2),
    solution: parseInt(req.params.number1) + parseInt(req.params.number2)
  }
    var sub = {
    operator: req.params.operation,
    operand1: parseInt(req.params.number1),
    operand2: parseInt(req.params.number2),
    solution: parseInt(req.params.number1) - parseInt(req.params.number2)
  }
    var div = {
    operator: req.params.operation,
    operand1: parseInt(req.params.number1),
    operand2: parseInt(req.params.number2),
    solution: parseInt(req.params.number1) / parseInt(req.params.number2)
  }
    var mult = {
    operator: req.params.operation,
    operand1: parseInt(req.params.number1),
    operand2: parseInt(req.params.number2),
    solution: parseInt(req.params.number1) * parseInt(req.params.number2)
  }
if (req.params.operation == "add") {
  res.send(add);
}
if (req.params.operation == "sub") {
  res.send(sub);
}
if (req.params.operation == "mult") {
  res.send(mult);
}
if (req.params.operation == "div") {
  res.send(div);
}
});





/* YOU DON'T HAVE TO CHANGE ANYTHING BELOW THIS LINE :) */

// Boilerplate code to start up the web server
var server = app.listen(process.env.PORT, process.env.IP, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
