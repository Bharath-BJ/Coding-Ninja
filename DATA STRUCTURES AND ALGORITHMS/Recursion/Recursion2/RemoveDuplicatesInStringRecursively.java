package Recursion2;

import java.util.Scanner;

/*
 * Remove Duplicates Recursively
Send Feedback
Given a string S, remove consecutive duplicates from it recursively.
Input Format :
String S
Output Format :
Output string
Constraints :
1 <= |S| <= 10^3
where |S| represents the length of string
Sample Input 1 :
aabccba
Sample Output 1 :
abcba
Sample Input 2 :
xxxyyyzwwzzz
Sample Output 2 :
xyzwz
 */
public class RemoveDuplicatesInStringRecursively {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		String input = s.next();
		System.out.println(removeConsecutiveDuplicates(input));
	}
	public static String removeConsecutiveDuplicates(String s) {
		// Write your code here
	    if(s.length() == 1)
            return s;
        String smallOutput= removeConsecutiveDuplicates(s.substring(1));
        char c=s.charAt(1);
        if(s.charAt(0) == c )
            return smallOutput;
        else
            return s.charAt(0) + smallOutput;
	}	
}
