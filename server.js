var express = require("express");
var path = require("path");
var multer = require("multer");
var bodyParser = require('body-parser');

var upload = multer({dest:'uploads/'});
var app = express();

app.use(bodyParser.json());


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/analyse',upload.single('upl'),function(req,res,next){
    console.log("A file has been sent ");
    var file = req.file;
    console.log(file);
    console.log(req.body);
    res.end(JSON.stringify({"size":file.size}));
});

app.listen(process.env.PORT || '8080',function(){
    console.log("App Running");
});