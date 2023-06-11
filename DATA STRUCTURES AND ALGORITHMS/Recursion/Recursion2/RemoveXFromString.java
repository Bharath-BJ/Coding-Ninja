package Recursion2;

import java.util.Scanner;

/*
 * Remove X
Send Feedback
Given a string, compute recursively a new string where all 'x' chars have been removed.
Input format :
String S
Output format :
Modified String
Constraints :
1 <= |S| <= 10^3
where |S| represents the length of string S. 
Sample Input 1 :
xaxb
Sample Output 1:
ab
Sample Input 2 :
abc
Sample Output 2:
abc
Sample Input 3 :
xx
Sample Output 3:
   (empty string)
 */
public class RemoveXFromString {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		String input = s.next();
		System.out.println(removeX1(input));
		System.out.println(removeX2(input));
	}
	// Approach 1 is  more of head recusion 
	public static String removeX1(String input){
        if(input.length() == 0)
            return input;
        String smallOutput = removeX1(input.substring(1));
        if(input.charAt(0) == 'x')
            return smallOutput;
        else
            return input.charAt(0) + smallOutput;
	}	
	// Approach 2 is more of tail recursion
	public static String removeX2(String input){
        if(input.length() == 0)
            return input;
        if(input.charAt(0) == 'x')
            input=input.substring(1);
        String smallOutput = removeX2(input.substring(1));
        if(input.charAt(0) != 'x')
        	smallOutput=input.charAt(0)+smallOutput;
    return smallOutput;
	}	
}
