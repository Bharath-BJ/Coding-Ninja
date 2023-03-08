// Create Timer
// Send Feedback
// Write a program to print 1 after 1 sec, 2 after 2 sec till 5. Complete the given code to get the desired output as shown in the expected output.
// Expected Output


// Here two methods for printing is executed
console.log("Hello!! Ninja");
var count=1;
var print=setInterval(
    function counter()
    {
        if(count==5)
            clearInterval(print);
        console.log(count++);
    },1000
);


function timer() {
    for(let i = 1; i<=5; i++){
        setTimeout(function() {
           console.log(i);
          
        },1000);
    }
    console.log("Hello ninjas!");
}
timer();
