var count;
const counter = (function () {
    return {
        initialize: function(start)
        { 
            count = start;  
        },
        increase: function()
        { 
            return ++count;
        }
    }
})();

counter.initialize(3);
let ans="";
// Here start=3, and no of increments=9 is given case in Coding ninjas
for(let i=1;i<=9;i++)
{
    ans+=counter.increase()+"\n";
}
console.log(ans);