/**
 * Created by wxh-user on 2016/4/3.
 */
var mongoose=require("mongoose");
var userSchema = new mongoose.Schema({
    name:{
        type:String
    },
    pass:{
        type:String,
        default:"123"
    },
    age:{
        type:Number,
        default:12
    },
    sex:{
        type:String,
        default:"nan"
    }
});
var user=mongoose.model("user",userSchema);
module.exports=user