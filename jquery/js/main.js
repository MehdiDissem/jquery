$("#bold").on("click",function(){
    var contentDiv= $("#article-body");
    console.log(contentDiv.css("font-weight"))
 

    if(contentDiv.css("font-weight") == "700"){
        contentDiv.css("font-weight","400");
    }else{
                          
          contentDiv.css("font-weight","700");
    }
});

$("#italic").on("click",function(){
    var contentDiv= $("#article-body");
    console.log(contentDiv.css("font-style"))

    if(contentDiv.css("font-style") == "normal"){
        contentDiv.css("font-style","italic");
    }else{
                          
          contentDiv.css("font-style","normal");
    }
});

$("#underline").on("click",function(){
    var contentDiv= $("#article-body");
    console.log(contentDiv.css("text-decoration"))

    if(contentDiv.css("text-decoration") == "none solid rgb(0, 0, 0)"){
        contentDiv.css("text-decoration","underline solid rgb(0, 0, 0)");
    }else{
                          
          contentDiv.css("text-decoration","none solid rgb(0, 0, 0)");
    }
});

var texte = document.getElementById("article-body");
var changeFonts=document.getElementById("changeFonts");

function changeFont()
{
    texte.style.fontFamily=changeFonts.value;
}

var fontSizeDD = document.getElementById('fontSizeDD');
fontSizeDD.onchange = function () {
    var texte = document.getElementById("article-body")
    texte.style.fontSize = this.value +"px";
}