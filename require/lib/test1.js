/**
 * Created by dell on 2016/5/6.
 */
    /*写法1*/
/*var a=1
if (typeof define === "function" && define.cmd){
    define(function(require, exports, module){
        return a=1
    })
}*/
//写法2

define(function(require, exports, module){
    return user={
        name:"lyz",
        age:24
    }
    /*此处或者exports={
     name:"lyz",
     age:24
 }*/
})