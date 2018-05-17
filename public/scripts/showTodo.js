document.addEventListener("DOMContentLoaded",()=>{
    
        var task= $("#task").get("0").value;
        var cstatus= $("#cstatus").get("0").value;
        var p=$("#prior").get("0").value;
        $("back").click();

        $.post(event.target.baseURI,{task:task,cstatus:cstatus,p:p}).done(function(){
            var u = event.target.baseURI;
            var l=u.length;
            u=u.substring(0,l-3);
            window.location.href=u;
            console.log(u);
        });
    
});