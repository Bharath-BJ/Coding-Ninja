package Strings;

import java.util.Scanner;
/*
 * Count Words
Send Feedback
For a given input string(str), find and return the total number of words present in it.
It is assumed that two words will have only a single space in between. Also, there wouldn't be any leading and trailing spaces in the given input string.
Input Format:
The first and only line of input contains a string without any leading and trailing spaces.
Output Format:
The only line of output prints an integer value denoting the tool number of words present in the string.
Note:
You are not required to print anything. It has already been taken care of.
Constraints:
0 <= N <= 10^6
Where N is the length of the input string.

Time Limit: 1 sec
Sample Input 1:
Coding Ninjas!
Sample Output 1:
2
Sample Input 2:
this is a sample string
Sample Output 2:
5
/
 */
public class CountWordsInString {
	public static int countWords1(String str) 
    {
        int n=str.length(),count=0,i;
        if(n==0)
        {
            return 0;
        }
        for(i=0;i<n;i++)
        {
            if(str.charAt(i)==' ')
            count++;
        }   
        return count+1;
    }
	public static int countWords2(String str) // This method will pass case even if there is spaces before the first word 
    {
		 int count=0;  
         char ch[]= new char[str.length()];     
         for(int i=0;i<str.length();i++)  
         {  
             ch[i]= str.charAt(i);  
             if( ((i>0)&&(ch[i]!=' ')&&(ch[i-1]==' ')) || ((ch[0]!=' ')&&(i==0)) )  
                 count++;  
         }  
         return count;  
    }
    public static void main(String[] args)
    {
        Scanner s= new Scanner(System.in);
        String str=s.nextLine();
        System.out.println(countWords1(str));
        System.out.println(countWords2(str));
    }

}
