document.addEventListener("DOMContentLoaded",function(){
    $("#signin").click(function(event){
        var username = $("#username").get("0").value;
        var password = $("#password").get("0").value;
        $.post("/signin",{username:username,password:password}).done( function(data){console.log(data)});
    })
})


