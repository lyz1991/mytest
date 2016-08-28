$(function(){
    function firset(){
        var defer=$.Deferred()
        $.get("/app/api").success(function(data){
        console.log(data);
        defer.resolve(1);
    })
        return defer.promise()
    }
   function twice(){
       var two= $.Deferred();
       $.get("/app/apo").success(function(data){
           setTimeout(function(){
               console.log(data);
               two.resolve(2);
           },3000)
       }).error(function(){
           two.reject(2);
       })
       return two.promise()
   }
  function three(){
      $.get("/app/apj").success(function(data){
              console.log(data)
      })
  }
firset().then(twice).done(three).fail(function(){
    console.log("第二个失败")
})

})