document.addEventListener("DOMContentLoaded",function(){
    
    $("#signup").click(function(event){
        var username = $("#username").get("0").value;
        var password = $("#password").get("0").value;
        var cpassword = $("#cpassword").get("0").value;
        if(!(password===cpassword)){
            alert("Passwords do not match");
        }else{
            $.post("/signup",{username:username,password:password}).done(
                window.location.href='/signin'
            );
        }
        
    })
})


