// Manipulating the caption using onclick function
var n1=1;
function counter1()
{
    // caption innerHTML using string concatenation
    var caption1=document.getElementById("caption1");
    caption1.innerHTML="Box Clicked "+ n1++ + " times";
}

// Manipulating the caption using addEventeListener function
var n2=1;
window.onload = function () {
    var button = document.getElementsByClassName("button2");
  
  
    if (button) {
        button[0].addEventListener("click",counter2)
    }

function counter2()
{
    // caption innerHTML using template literal
    var caption2=document.getElementById("caption2");
    caption2.innerHTML=`<h3>Box Clicked ${n2++} times</h3>`;
}
}
