package Strings;

import java.util.Scanner;

/*
 * Highest Occuring Character
Send Feedback
For a given a string(str), find and return the highest occurring character.
Example:
Input String: "abcdeapapqarr"
Expected Output: 'a'
Since 'a' has appeared four times in the string which happens to be the highest frequency character, the answer would be 'a'.
If there are two characters in the input string with the same frequency, return the character which comes first.
Consider:
Assume all the characters in the given string to be in lowercase always.
Input Format:
The first and only line of input contains a string without any leading and trailing spaces.
Output Format:
The only line of output prints the updated string. 
Note:
You are not required to print anything explicitly. It has already been taken care of.
Constraints:
0 <= N <= 10^6
Where N is the length of the input string.

Time Limit: 1 second
Sample Input 1:
abdefgbabfba
Sample Output 1:
b
Sample Input 2:
xy
Sample Output 2:
x/
 */
public class HighestOccuringCharacterInString {
	public static int counter(String str,char element) {
	    int n=str.length(),j,count=0;
	    for(j=0;j<n;j++)
	    {
	        if(str.charAt(j)==element)
	            count++;
	    }
	    return count;
	}
	public static char Occurence1(String str) 
	{
	    int i,n=str.length(),high=Integer.MIN_VALUE,index=-1;
	    for(i=0;i<n;i++)
	    {
	        char element=str.charAt(i);
	        int count=0;
	        count=counter(str,element);
	        if(high<count)
	        {
	            high=count;
	            index=i;
	        }
	    }  
	    return str.charAt(index);  
	}                                                

	public static char highest(int [] arr) // This method is easy but insightful coz of using frequency array concept
	{
	    int i,n=arr.length,max=Integer.MIN_VALUE,index=0;
	    for(i=0;i<n;i++)
	    {
	        if(max<arr[i])
	        {
	            max=arr[i];
	            index=i;
	        }
	    }   
	    
	    return (char)index;
	}
	public static char Occurence2(String str) 
	{
	    int n=str.length(),i,index;
	    int arr[]=new int[256];
	    for(i=0;i<n;i++)
	    {
	        index=(int)str.charAt(i);            
	        arr[index]++;           
	    }    
	    
	    return highest(arr);
	}
	public static char Occurence3(String str) // This method is succint by Coding ninjas to solve this problem with frequency array
	{
	    int n=str.length(),i,j,max=0;
	    int arr[]=new int[256];
	    for(i=0;i<n;i++)
	    {
	        arr[str.charAt(i)]++;
	        max=Math.max(max,arr[str.charAt(i)]);           
	    }    
	    char answer='\0';
	    for(j=0;j<n;j++)
	    {
	        if(arr[str.charAt(j)]==max)
	        {
	            answer=str.charAt(j);
	            break;
	        }
	    }
	    return answer;
	    
	    
	}               
	public static void main(String[] args) {
    Scanner s=new Scanner(System.in);
    String str=s.nextLine();
    System.out.println(Occurence1(str)); 
    System.out.println(Occurence2(str));   
    System.out.println(Occurence3(str)); 
	} 
}
