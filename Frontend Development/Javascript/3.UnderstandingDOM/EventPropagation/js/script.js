window.onload= function()
{
    var outerDiv=document.getElementById("outerDiv");
    var innerDiv=document.getElementById("innerDiv");

    //Here through event propagation when innerDIv(child) is triggered, immediately, 
    //if the same event is present in outerDiv or document(parent & ancestors) then it is also triggered
    if(innerDiv)
        innerDiv.addEventListener("click",function(event)
        {
            console.log("INNERDIV TRIGGERED");
        });
    if(outerDiv)
        outerDiv.addEventListener("click",function(event)
        {
            console.log("OUTERDIV TRIGGERED");
        });

    document.addEventListener("click",function()
    {
        console.log("DOCUMENT TRIGGERED");
    });
}