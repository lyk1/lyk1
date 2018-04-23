$(function(){
    var imgHtml = "";
    for(var i=1;i<14;i++){
        var il = i;
        if(il.toString().length<2)
            il = "0"+i;
        imgHtml +="<img src='images/index_"+il+".jpg'>";
    }
    $(".main").html(imgHtml)
})