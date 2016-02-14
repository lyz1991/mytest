/**
 * Created by wxh-user on 2016/1/9.
 */
var express=require("express");
var app=express();
app.use(express.static("./"))
app.listen(3000,function(){
    console.log(1)
})