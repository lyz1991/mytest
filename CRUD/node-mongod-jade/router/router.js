/**
 * Created by wxh-user on 2016/4/2.
 */
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/user");
var express=require("express");
var bodyParser = require('body-parser');

var router=express.Router();
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());
var Users=require("../collections/user");
var details=require("../collections/details")

router.post("/app/login",function(req,res){


    var data={name:req.body.name,pass:req.body.pass}

    Users.findOne(data,function(err,user){
         if(!user){
             res.send("1")
        }
        else{
             res.send("2")
         }
            })


});
router.get("/app/detail",function(req,res){
  details.find({},function(err,data){
      res.render("detail",{
          list:data
      })

    })



})
router.get("/app/detail/del/:id",function(req,res){
    console.log(req.params)
    details.remove({_id:req.params.id},function(err,data){
        if(err){
            console.log(err)
        }
        else{
            res.redirect("/app/detail")
        }
    })
})
router.post("/app/detail/append",function(req,res){
    new details(req.body).save(function(err,data){
        res.redirect("/app/detail")
    });
})
router.all("/",function(req,res){
    res.render("admin")
})
module.exports=router;