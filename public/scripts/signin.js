document.addEventListener("DOMContentLoaded",function(){
    $("#signin").click(function(event){
        var username = $("#username").get("0").value;
        var password = $("#password").get("0").value;
        console.log("in sign in username "+username+" password "+password);
        $.post("/signin",{username:username,password:password}).done(
            function(data){                
                if(!(data===null)){
                    window.location.href='/user/'+username;
                }
            }
        );
    })
})


