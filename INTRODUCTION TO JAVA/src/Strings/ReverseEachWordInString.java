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
emocleW ot gnidoC sajniN
Sample Input 2:
Always indent your code
Sample Output 2:
syawlA tnedni ruoy edoc/
 */
public class ReverseEachWordInString {
	public static String reverse(String str) {
        int i,j,n=str.length(),wordStart=0,wordEnd;
        String ans="";
        for(i=0;i<n;i++)
        {
            if(str.charAt(i)==' ')
            {
                wordEnd=i-1;
                String reverseWord="";
                for(j=wordStart;j<=wordEnd;j++)
                {
                    reverseWord=str.charAt(j)+reverseWord;
                }
                ans+=reverseWord+" ";
                wordStart=i+1;
            }
        }
        wordEnd=i-1;
        String reverseWord="";
        for(j=wordStart;j<=wordEnd;j++)
        {
            reverseWord=str.charAt(j)+reverseWord;
        }
        ans+=reverseWord+" ";
        wordStart=i+1;
        return ans;
        
    }
    public static void main(String[] args) {
    	Scanner s=new Scanner(System.in);
	    String str=s.nextLine();
        System.out.println(reverse(str));
    }
}
