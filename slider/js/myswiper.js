/**
 * Created by Admin on 2015/10/23.
 */
(function($){
    $.fn.myswiper=function(options){
        var defaults={
            obj:null,
            len:null,
            time:null,
            type:null,
            prev:null,
            next:null,
            num:null,
            wap:null,
            deg:0,
            container:null

        }
        var set=$.extend(defaults,options||{})
        switch(set.type){
            case 1:
                marqu();
                break
            case 2:
                rotate();
                break
        }
        function marqu(){
            var oneleft=parseInt($(set.obj).css("margin-left"))+$(set.obj).width();
            $(set.next).click(function(){

                set.num++;

                if(set.num>11){
                    $(set.container).css("left",0);
                   set.num=1
                }

                $(set.container).stop().animate({left:-set.num*oneleft+"px"});





            })
            $(set.prev).click(function(){
                set.num--;
                if(set.num<0){
                    $(".container").css("left",-oneleft*11+"px");
                    set.num=10
                }

                $(set.container).stop().animate({left:-set.num*oneleft+"px"});


            })
            function auto(){
                $(set.next).trigger("click")
            }
            var timer=setInterval(auto,set.time);
            $(set.next,set.prev,set.obj).hover(function(){
                clearInterval(timer)
            },function(){
                timer=setInterval(auto,2000);
            })
        }
        function rotate(){
            var obj=document.getElementById("audio")

            var deg=360/($(set.obj).length-1);


            for(var i=0;i<10;i++){
                $(set.obj).eq(i).css('transform','rotateY('+i*deg+'deg) translateZ(250px)')
            }
            function my(){
                var arr=[0,-36,-72,-108,-144,-180,-216,-252,-288,-324,-360]
                var n=1
                var alltime=obj.duration;
                var ctinme=obj.currentTime;
                var radio=ctinme/alltime;
                var d=-360*radio;

                $(set.container).css('transform', 'rotateY('+d+'deg)')
                /*$.each(arr,function(i){
                    if(d>=arr[i]-15&&d<=arr[i]+15){
                        var html=$("img").eq(i).attr("alt")
                        $("#title").html(html);
                        $("#title").fadeIn(1000);

                    }


                })*/
            };
            t=setInterval(my,1000)
            document.addEventListener('mousewheel',function(event){
                var e=event||window.event;
                e.preventDefault();
                var delta= e.wheelDelta||-e.detail||-e.deltaY;
                if(delta<0){
                    $(set.container).css('transform', 'rotateX(-30deg)')
                }else{
                    $(set.container).css('transform', 'rotateX(30deg)')
                }

            },false)
            $(document).mousedown(function(e){

                    var x= e.clientX;
                    $(document).bind('mousemove',function(e){
                            var _x= e.clientX;
                            $(set.container).css({left:(x-_x)+"px"})

                        }

                    )
                }

            ).mouseup(function(){
                    $(document).unbind('mousemove')
                })

        }
    }


})(jQuery)