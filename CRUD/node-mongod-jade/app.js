/**
 * Created by wxh-user on 2016/4/2.
 */
    var monggoose=require("mongoose");


var router=require("./router/router");
var express=require("express");
var app=express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.set("views","./views/pages");


app.set('view engine','jade');
app.use(express.static("./"))


app.use(router)
var port=process.env.PORT||3000;



app.listen(port)