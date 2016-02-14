/**
 * Created by Admin on 2015/10/20.
 */;
$(function(){
    var obj=document.getElementById("audio")

    var deg=360/($('img').length-1);


    for(var i=0;i<10;i++){
        $('img').eq(i).css('transform','rotateY('+i*deg+'deg) translateZ(250px)')
    }
    function my(){
        var arr=[0,-36,-72,-108,-144,-180,-216,-252,-288,-324,-360]
        var n=1
        var alltime=obj.duration;
        var ctinme=obj.currentTime;
        var radio=ctinme/alltime;
        var d=-360*radio;

        $('.container').css('transform', 'rotateY('+d+'deg)')
        $.each(arr,function(i){
            if(d>=arr[i]-15&&d<=arr[i]+15){
                var html=$("img").eq(i).attr("alt")
                $("#title").html(html);
                $("#title").fadeIn(1000);

            }


        })
    };
    t=setInterval(my,1000)
    document.addEventListener('mousewheel',function(event){
        var e=event||window.event;
        e.preventDefault();
        var delta= e.wheelDelta||-e.detail||-e.deltaY;
        if(delta<0){
            $('.container').css('transform', 'rotateX(-30deg)')
        }else{
            $('.container').css('transform', 'rotateX(30deg)')
        }

    },false)
    $(document).mousedown(function(e){

            var x= e.clientX;
            $(document).bind('mousemove',function(e){
                    var _x= e.clientX;
                    $('.container').css({left:(x-_x)+"px"})

                }

            )
        }

    ).mouseup(function(){
            $(document).unbind('mousemove')
        })


})


