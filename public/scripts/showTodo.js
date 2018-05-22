document.addEventListener("DOMContentLoaded",(event)=>{
    $.post(event.target.baseURI,{}).done((user)=>{
        // for(var i=0;)
        console.log("from here "+user);
        user= JSON.parse(user);
        $.each(user,(i,item)=>{
            $("#table tbody").append(
                "<tr>"+
                "<td>"+item.task+"</td>"+
                "<td>"+item.completeStatus+"</td>"+
                "<td>"+item.priority+"</td>"+
                "</tr>"
            );
        });
        
    });
        
        $("#back").click((event)=>{
            var u = event.target.baseURI;
            var l=u.length;
            u=u.substring(0,l-4);
            window.location.href=u;
            console.log(u);
        });

        
    
});