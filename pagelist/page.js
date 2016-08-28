/**
 * Created by wxh-user on 2016/3/15.
 */
(function($){
    if(typeof jQuery == "undefined"){
        throw new Error("当前没有jquery")
    };
    $.fn.pagelist = function(list){
        var d = document;
        var _this=this;
        var defaults={
            num:5,
            list:list,
            cla:"page",
            node:"#rig"
        }
        var settings=$.extend(defaults,list||{});
        var pagenum=function(list){
            if(list.length%settings.num!=0){
                pagenum=parseInt(list.length/settings.num)+1;
            }
            else{
                pagenum=parseInt(list.length/settings.num)
            };
            return pagenum
        }(settings.list);


        for(var i=1;i<=pagenum;i++){
            var span=d.createElement("span");
            span.setAttribute("name","page")
            span.className=settings.cla
            var oText = d.createTextNode(i);
            span.appendChild(oText);
            $(settings.node).append(span)
        };

     function pagecontent(begnum){

         for(var i=begnum;i<begnum+settings.num;i++){
            var tr=d.createElement("tr")
            for(var x in settings.list[i]){
                var td= d.createElement("td");
                var oText=d.createTextNode(settings.list[i][x]);
                td.appendChild(oText);
                $(tr).append(td);
            }
          _this.append(tr)
         }
     };
        pagecontent(0)

        $("span[name='page']").on("click",function(){
        var trnode=_this.find("tr").eq(0).clone();
            var oText=d.createTextNode(trnode);
            _this.empty().append(trnode);
            var begnum=($(this).html()-1)*settings.num;
            pagecontent(begnum)
        });
      return this.each(function(){
          return this
      })
    };
    
})(jQuery)