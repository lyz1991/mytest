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
        //���b�ļ���дdefine�жϣ���ô�����Ҫдshim����require����ʲô
    },

    paths:{
        jq:"./lib/jquery.min",//ע���������дjq�Ļ�����ôshim��������jq������require����ʶ
        b:"./src/jqtest1"
    }

});
require(["b"],function(b){
    alert($)
    b.add()

})
