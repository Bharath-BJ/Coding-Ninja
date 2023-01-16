package Strings;

import java.util.Scanner;
/*
 * Reverse String Wordwise
Send Feedback
Reverse the given string word wise. That is, the last word in given string should come at 1st place, last second word at 2nd place and so on. Individual words should remain as it is.
Input format :
String in a single line
Output format :
Word wise reversed string in a single line
Constraints :
0 <= |S| <= 10^7
where |S| represents the length of string, S.
Sample Input 1:
Welcome to Coding Ninjas
Sample Output 1:
Ninjas Coding to Welcome
Sample Input 2:
Always indent your code
Sample Output 2:
code your indent Always*/
public class ReverseWordsInString {
	public static String reverseWordWise(String input) {
		int i,j,n=input.length(),wordStart=0,wordEnd;
        String ans="";
        for(i=0;i<n;i++)
        {
            if(input.charAt(i)==' ')
            {
                wordEnd=i-1;
                String Word="";
                for(j=wordStart;j<=wordEnd;j++)
                {
                    Word+=input.charAt(j);
                }
                ans=Word+" "+ans;
                wordStart=i+1;
            }
        }
        wordEnd=i-1;
        String Word="";
        for(j=wordStart;j<=wordEnd;j++)
        {
            Word+=input.charAt(j);
        }
        ans=Word+" "+ans;
        wordStart=i+1;
        return ans;
        
	}
	 public static void main(String[] args) {
	        Scanner s=new Scanner(System.in);
	        String str=s.nextLine();
	        String ans=reverseWordWise(str);
	        System.out.println(ans);
	    }
}
