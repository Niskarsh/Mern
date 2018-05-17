document.addEventListener("DOMContentLoaded",function(){
    $("#add").click(function(event){
        var ur= event.target.baseURI;
        
        var len =ur.length;

        var u=(ur.charAt(len-1)==='/')?(event.target.baseURI+"add"):(event.target.baseURI+"/add");
        $.get(u).done(
            window.location.href=u
        );
    });
    $("#show").click(function(event){
        var ur= event.target.baseURI;
        
        var len =ur.length;

        var u=(ur.charAt(len-1)==='/')?(event.target.baseURI+"show"):(event.target.baseURI+"/show");
        $.get(u).done(
            window.location.href=u
        );
    });
});