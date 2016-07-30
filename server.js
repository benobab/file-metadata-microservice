var express = require("express");
var path = require("path");

var app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/analyse',function(req,res){
    
});

app.listen(process.env.PORT || '8080',function(){
    console.log("App Running");
});