
    var option={
            n:null,
            idx:0,
            radio:750/88,
            detail:"",
            dot:true,
            state:false,
            max:55555550000,
            init:function(){
                this.num();
                this.cancel();
                this.hideitem();
                this.showitem();
                this.dallorive();
                this.footer(".footer-footer");
                this.submitdata()
            },
            num:function(){
                var _this=this
                $(".num").each(function(){
                    $(this).bind("touchlyz",function(){
                        _this.idx=0;


                        _this.float($(this).html(),this);
                    })
                })
            },
            check:function(idx){
                idx=+idx;
                if(idx-this.max>0){
                    alert("最大不能超过"+this.max);
                    return false
                }
                else{
                    $("#detail").html(this.detail);
                    this.n=$("#detail").html().length;
                    return true

                }
            },

            cancel:function(){
                  var _this=this;
                  $("#cancel").bind("touchlyz",function(){
                      _this.idx++;
                      var str=$("#detail").html();
                      var html=str.substr(0,_this.n-_this.idx);
                      _this.detail=html;
                      _this.checkdot();
                      _this.dallorive()
                      $("#detail").html(html)
                  })
              },

             hideitem:function(){
                 $("#keyboard").bind("touchlyz",function(){
                     $(".footer").hide();
                 })
             },

             showitem:function(){
                 $("#dallor").bind("touchlyz",function(){
                     $(".footer").show();
                 })
             },

                float:function(html,tpl){
                 /*如果是点*/
                 if(html=="."){
                     /*如果点出现在首位*/
                     if(this.detail==""){
                         this.detail+="0"+html;
                         this.dot=false;
                         this.checkcss(tpl)

                     }
                     /*如果点不是出现在首位*/
                     else if(this.dot){
                         this.detail+=html;
                         this.dot=false;
                     }
                     this.state=false;
                     $("#null,.weixin,#str").css({"background-color":"#f8f8f8","color":"#d3d3d3"});

                     this.check(this.detail)
                 }
                 /*如果是数字*/

                 else{

                     var str=this.detail;
                     /*如果首位0*/
                     if(this.detail.substr(0,1)=="0"&&this.detail.substring(1,2)!="."){
                         this.detail=html;
                         //$("#int").html(this.detail)
                         this.checkcss(tpl)
                     }
                     /*如果有小数点*/
                      else if(str.indexOf(".")!=-1){
                        var p=str.indexOf(".");
                         /*如果小数点后位数超过两位*/
                         if(str.length-p>2){
                             return false
                         }
                         else{
                             this.detail+=html;
                             this.checkcss(tpl);
                             //$("#str").css({"background-color":"#1fcb81","color":"white"});

                             //$("#null,.weixin").css({"background-color":"#efb200","color":"white"});
                             if(this.detail-this.max<=0){
                                 str=this.detail;
                                 $("#float").html(str.substr(p))
                             }
                         }
                     }
                     /*如果当前值没有点*/
                     else{

                         this.detail+=html;
                         if(this.detail-this.max<=0){
                             this.checkcss(tpl)
                         }
                         else{
                             alert("超过"+this.max)
                             this.detail=this.detail.substr(0,this.detail.length-1)
                         }

                     };
                     this.state=true;

                     this.check(this.detail)
                 }

             },
               checkdot:function(){
                   if(this.detail.indexOf(".")==-1){
                       this.dot=true;

                   }
                   else{
                       var p=this.detail.indexOf(".");
                       var ff=this.detail.substr(p);
                       var int=this.detail.substr(0,p);

        }
    },
    /*当上面的值为空，下面的值*/
             dallorive:function(){
                 if(this.detail.indexOf(".")==this.detail.length-1){
                     $("#null,.weixin,#str").css({"background-color":"#f8f8f8","color":"#d3d3d3"});
                 }
                 else{
                     $("#str").css({"background-color":"#1fcb81","color":"white"});
                     $("#null,.weixin").css({"background-color":"#efb200","color":"white"});
                 }
             },
              submitdata:function(){
                  var _this=this
                  $("#str,#null,.weixin").bind("touchlyz",function(){
                      if(_this.detail.indexOf(".")==_this.detail.length-1||_this.detail==""){
                          alert("金额错误")
                      }else{
                          alert("可以提交")
                      }

                  })

             },
                checkcss:function(obj){
                    $(obj).css("background-color","#1fcb81").siblings(".num").css("background-color","white");
                    $("#str").css({"background-color":"#1fcb81","color":"white"});
                    $("#null,.weixin").css({"background-color":"#efb200","color":"white"});
                },

             footer:function(obj){
                 var cwidth=document.documentElement.clientWidth;
                 var cheight=document.documentElement.clientHeight;
                 $(obj).height(cwidth/this.radio);
                 $(".footer").css({"height":cheight-112-$(obj).height()+"px"});
                 $("#cancel,#str,.num,.null,.weixin").height($(".footer").height()/4);
                 //$(".weixin").height($(".footer").height()/2)


             }
        }
