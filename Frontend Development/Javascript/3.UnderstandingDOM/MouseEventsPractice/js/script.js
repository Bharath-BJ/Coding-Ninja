function mouseWork()
{
    console.log("MouseOut");
    var caption=document.getElementById("caption");
    caption.innerHTML="Mouse out";
}

window.onload= function (){
var button=document.getElementsByClassName("button");
if (button)
    button[0].addEventListener('mouseover',function(event)
{
    console.log("Mouse over");
    var caption=document.getElementById("caption");
    caption.innerHTML="Mouse over";
});
}