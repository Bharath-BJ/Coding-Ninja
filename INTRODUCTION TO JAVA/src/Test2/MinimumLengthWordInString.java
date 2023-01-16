package Test2;

import java.util.Scanner;

/*
 * Minimum Length Word
Send Feedback
Given a string S (that can contain multiple words), you need to find the word which has minimum length.
Note : If multiple words are of same length, then answer will be first minimum length word in the string.
Words are seperated by single space only.
Input Format :
String S
Output Format :
Minimum length word
Constraints :
1 <= Length of String S <= 10^5
Sample Input 1 :
this is test string
Sample Output 1 :
is
Sample Input 2 :
abc de ghihjk a uvw h j
Sample Output 2 :
a/
 */
public class MinimumLengthWordInString {
	public static String minLengthWord(String input)
    {
        int n=input.length(),i,j,wordStart=0,wordEnd,minLength=Integer.MAX_VALUE;
        String output="";
        for(i=0;i<n;i++)
        {
            if(input.charAt(i)==' ')
            {
                wordEnd=i-1;
                int count=0;
                String str="";
                for(j=wordStart;j<=wordEnd;j++)
                {
                    count++;
                    str+=input.charAt(j);
                }
                wordStart=i+1;
                if(count<minLength)
                {
                    minLength=count;
                    output=str;
                }
            }

        }
        wordEnd=i-1;
        int count=0;
        String str="";
        for(j=wordStart;j<=wordEnd;j++)
        {
            count++;
            str+=input.charAt(j);
        }
        wordStart=i+1;
        if(count<minLength)
        {
            minLength=count;
            output=str;
        }


        return output;
    }
    public static void main(String[] args) 
    {
    	Scanner s = new Scanner(System.in);
        String input=s.nextLine();    
        System.out.print(minLengthWord(input));
    }
}
