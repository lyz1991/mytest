/**
 * Created by wxh-user on 2016/2/9.
 */
var express = require('express');
var fs=require("fs")
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();
app.post('/app/api', multipartMiddleware, function(req, res) {
    var img=["image/png","image/jpeg","image/gif"];
    var type=req.files["upload"]["type"];
    console.log(type)
    if(img.indexOf(type)==-1){
        res.send("1")
    }
    else{
        if(req.files["upload"]["size"]/1024>100){
            res.send("2")
        }
        else{
            console.log(req.files["upload"])
            var path=req.files["upload"]["path"];
            var time=new Date().getTime();
            fs.writeFileSync("./img/"+time+".png", fs.readFileSync(path));
            res.send("../img/"+time+".png")
        }
    }



});


app.use(express.static("./"))

app.listen(3010,function(){
    console.log(1)
})