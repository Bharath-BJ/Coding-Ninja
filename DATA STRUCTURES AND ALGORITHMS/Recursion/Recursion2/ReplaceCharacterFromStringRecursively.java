package Recursion2;

import java.util.Scanner;

/*
 * Replace Characters Recursively
Send Feedback
Given an input string S and two characters c1 and c2, you need to replace every occurrence of character c1 with character c2 in the given string.
Do this recursively.
Input Format :
Line 1 : Input String S
Line 2 : Character c1 and c2 (separated by space)
Output Format :
Updated string
Constraints :
1 <= Length of String S <= 10^6
Sample Input :
abacd
a x
Sample Output :
xbxcd
 */
public class ReplaceCharacterFromStringRecursively {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		String input = s.next();
		char c1=s.next().charAt(0);
		char c2=s.next().charAt(0);
		System.out.println(replaceCharacter1(input,c1,c2));
		System.out.println(replaceCharacter2(input,c1,c2));
	}	
	// This is approach using head recursion
	public static String replaceCharacter1(String input, char c1, char c2) {
		if(input.length() == 0)
			return input;
        String smallOutput= replaceCharacter1(input.substring(1), c1, c2);
        if(input.charAt(0) == c1 )
            return c2 + smallOutput;
        else
            return input.charAt(0) + smallOutput;
	}
	// This is approach using tail recursion
	public static String replaceCharacter2(String input, char c1, char c2) {
		if(input.length() == 0)
			return input;
		if(input.charAt(0) == c1 )
            input= c2 + input.substring(1);
        String smallOutput= input.charAt(0)+replaceCharacter2(input.substring(1), c1, c2);
     return smallOutput;
	}
	
}
