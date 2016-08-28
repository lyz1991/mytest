/**
 * Created by wxh-user on 2016/4/4.
 */
/**
 * Created by wxh-user on 2016/4/3.
 */
var mongoose=require("mongoose");
var detailSchema = new mongoose.Schema({
    title:{
        type:String
    },
    state:{
        type:Number,
        default:3
    }
});
var details=mongoose.model("detail",detailSchema);
module.exports=details