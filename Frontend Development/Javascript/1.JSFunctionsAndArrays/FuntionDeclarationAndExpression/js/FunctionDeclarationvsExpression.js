var factorial1=function (n)
{
  var ans=1;
  for(var i=1;i<=n;i++)
  {
    ans*=i
  }
  return ans;
}
var factorial2=function fact (n)
{
  if(n==0)
     return 1;
  return n*fact(n-1);
}

console.log(factorial1(5));
console.log(factorial2(5));
console.log(factorial1);
console.log(factorial2); 