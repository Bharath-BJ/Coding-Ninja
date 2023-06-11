package Assignments;

import java.util.Scanner;

/*
 * Check Palindrome (recursive)
Send Feedback
Check whether a given String S is a palindrome using recursion. Return true or false.
Input Format :
String S
Output Format :
'true' or 'false'
Constraints :
0 <= |S| <= 1000
where |S| represents length of string S.
Sample Input 1 :
racecar
Sample Output 1:
true
Sample Input 2 :
ninja
Sample Output 2:
false
 */
public class CheckPalindrome {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		String input=s.next();
		System.out.println(isStringPalindrome(input));
	}
	// We can also solve this problem by using double pointer
	public static boolean isStringPalindrome(String input) {
		int l = input.length();
		if(l <= 1)
	        return true;
	    boolean smallOutput  = isStringPalindrome(input.substring(1,l-1));
	    boolean output= (input.charAt(0) == input.charAt(l-1)) && smallOutput;
	    return output;
	}
	
}
