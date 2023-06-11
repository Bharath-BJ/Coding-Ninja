package Assignments;

import java.util.Scanner;

/*
 * String to Integer
Send Feedback
Write a recursive function to convert a given string into the number it represents. That is input will be a numeric string that contains only numbers, you need to convert the string into corresponding integer and return the answer.
Input format :
Numeric string S (string, Eg. "1234")
Output format :
Corresponding integer N (int, Eg. 1234)
Constraints :
0 < |S| <= 9
where |S| represents length of string S.
Sample Input 1 :
00001231
Sample Output 1 :
1231
Sample Input 2 :
12567/
 */
public class StringToInteger {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		String input=s.next();
		System.out.println(convertStringToInt(input));
	}
	public static int convertStringToInt(String input){
        int l =input.length();
        if(l == 1)
            return input.charAt(0) - '0' ;
        int smallOutput = convertStringToInt(input.substring(0, l-1));
        int Output = smallOutput*10 + (input.charAt(l-1)-'0') ;
    return Output;
    }
}
