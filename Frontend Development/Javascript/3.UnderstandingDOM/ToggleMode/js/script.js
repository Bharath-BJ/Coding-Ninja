// Manipulating the background using onclick function
function changeBackground1()
{
    var checked=document.getElementById("checkbox1");
    var body=document.getElementsByTagName("body");
    if(checked.checked)
        body[0].style.backgroundColor="black";
    else
        body[0].style.backgroundColor="white";
}

// Manipulating the background using addEventListener function
window.onload=function(){
var checked=document.getElementById("checkbox2");
checked.addEventListener("click",changeBackground2);

 function changeBackground2(){
    var body=document.getElementsByTagName("body");
    if(checked.checked)
        body[0].style.backgroundColor="red";
    else
        body[0].style.backgroundColor="white";
}
}



