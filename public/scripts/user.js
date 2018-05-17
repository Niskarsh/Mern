document.addEventListener("DOMContentLoaded",function(){
    $("#add").click(function(event){
        var u=event.target.baseURI+"/add";
        $.get(u).done(
            window.location.href=u
        );
    });
});