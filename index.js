var express = require("express");
var app = express();


var entries = {
  1: {
    firstName: "John",
    lastName: "Smith",
    emails: [
      {type: "home", address: "john@smith.com"},
      {type: "work", address: "jsmith@megacorp.com"}
    ]
  }, 
  2: {
    firstName: "JOHN",
    lastName: "CENA",
    emails: [
      {type: "home", address: "JOHNCENA@WWE.com"},
      {type: "work", address: "JOHNCENA@WWE.com"}
    ]
  },
};

app.get('/entry/search', function(req, res){
    var matches = [];
    
    if(req.query.firstName){
        for(var i in entries){
            if((entries[i].firstName).toLowerCase() === (req.query.firstName).toLowerCase() || (entries[i].lastName).toLowerCase() === (req.query.lastName).toLowerCase()){
                matches.push(entries[i]);
            }
        }
    } else if (req.query.email){
        for(var i in entries){
            entries[i].emails.forEach(function(email){
                if(email.address.indexOf(req.query.email) > -1){
                    res.json(entries[i])
                }
            })
        }
    } else {
        res.status(404).send();
    }
    
    res.json(matches);
    
    
    
})











app.listen(process.env.PORT, function(){
  console.log("Server Listening")
})