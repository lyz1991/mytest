/**
 * Created by dell on 2016/5/6.
 */
var obj={
    add:function(){
        alert(1)
    }
};
if(typeof define=="function"&& define.amd){
    define(["jq"],function($){
        console.log($)
        return obj
    })

}