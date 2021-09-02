var input=document.getElementById("userinput");
var button=document.getElementById("enter");
var ul=document.getElementById("ul");
function additemclick(){
    if(input.value.length>0){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
}
function additempress(event){
    if(input.value.length>0 && event.keyCode===13){
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value="";
    }
}
button.addEventListener("click",additemclick);
input.addEventListener("keypress",additempress);
