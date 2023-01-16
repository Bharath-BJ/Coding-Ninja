package Strings;

import java.util.Scanner;

/*
 * Compress the String
Send Feedback
Write a program to do basic string compression. For a character which is consecutively repeated more than once, replace consecutive duplicate occurrences with the count of repetitions.
Example:
If a string has 'x' repeated 5 times, replace this "xxxxx" with "x5".

The string is compressed only when the repeated character count is more than 1.
Note:
Consecutive count of every character in the input string is less than or equal to 9.
Input Format:
The first and only line of input contains a string without any leading and trailing spaces.
Output Format:
The output contains the string after compression printed in single line.
Note:
You are not required to print anything. It has already been taken care of. Just implement the given function.
Constraints:
0 <= N <= 10^6

Where 'N' is the length of the input string.

Time Limit: 1 sec
Sample Input 1:
aaabbccdsa
Sample Output 1:
a3b2c2dsa
Explanation for Sample Output 1:
In the given string 'a' is repeated 3 times, 'b' is repeated 2 times, 'c' is repeated 2 times and 'd', 's' and 'a' and occuring 1 time hence no compression for last 3 characters.
Sample Input 2:
aaabbcddeeeee
Sample Output 2:
a3b2cd2e5
Explanation for Sample Output 2:
In the given string 'a' is repeated 3 times, 'b' is repeated 2 times, 'c' is occuring single time, 'd' is repeating 2 times and 'e' is repeating 5times./
 */
public class CompressTheString {
	public static String getCompressedString(String str) // Avoid using frequency array when the output not neccessarily in the alphabetical order
    {
        int n=str.length(),i,j;
        String outputStr="";
        for(i=0;i<n;i=j)                // This loop is for alphabet iteration 
        {
            outputStr+=str.charAt(i);
            int count=1;
            for(j=i+1;j<n;j++)          // This loop is for count the occurence of every alphabet
            {
                if(str.charAt(j)==str.charAt(j-1))
                {
                    count++;
                }
                else
                {
                    break;
                }
            }
            if(count>1)
            {
                outputStr+=count;
            }
        }
    return outputStr;
	}
    public static void main(String[] args) 
    {
        Scanner s=new Scanner(System.in);
        String str=s.nextLine();
        System.out.println(getCompressedString(str));

    }
}
