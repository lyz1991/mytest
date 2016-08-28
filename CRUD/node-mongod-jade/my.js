$(function(){
    $("#append").click(function(){
        $("#myform").show();
        $("#myform").submit(function(){
            var serlize=$(this).serialize()
            $.post("/app/detail/append",serlize).success(function(data){
                window.location.href="http://localhost:3000/app/detail";
                $("#myform").hide()
            })
            return false;
        })
    })
    $("#edit").click(function(){
        $("#myform2").show();
        $("#myform2").submit(function(){
            var serliaze=$(this).serialize();
            //$.post(serliaze,"//")
        })
    })
})