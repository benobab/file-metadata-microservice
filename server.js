var express = require("express");
var path = require("path");
var multer = require("multer");

var upload = multer({dest:'uploads/'});
var app = express();

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.post('/analyse',upload.single('filechosen'),function(req,res,next){
    var file = req.file;
    console.log(file);
    console.log(req.body);
    res.end(JSON.stringify({"size":file.size}));
});

app.listen(process.env.PORT || '8080',function(){
    console.log("App Running");
});