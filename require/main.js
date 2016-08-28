/**
 * Created by dell on 2016/5/5.
 */
require.config({
    shim:{
        jq:{
            exports:'jQuery'
        }
       /* b:{
            deps:['jq'],
            exports:'obj'
        }*/
        //如果b文件不写define判断，那么这里就要写shim告诉require它是什么
    },

    paths:{
        jq:"./lib/jquery.min",//注意这里如果写jq的话，那么shim必须配置jq；否则require不认识
        b:"./src/jqtest1"
    }

});
require(["b"],function(b){
    alert($)
    b.add()

})
