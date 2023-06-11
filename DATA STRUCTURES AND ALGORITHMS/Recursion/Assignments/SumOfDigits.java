package Assignments;

import java.util.Scanner;

/*
 * Sum of digits (recursive)
Send Feedback
Write a recursive function that returns the sum of the digits of a given integer.
Input format :
Integer N
Output format :
Sum of digits of N
Constraints :
0 <= N <= 10^9
Sample Input 1 :
12345
Sample Output 1 :
15
Sample Input 2 :
9
Sample Output 2 :
9/
 */
public class SumOfDigits {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int input = s.nextInt();
		System.out.println(sumOfDigits(input));
	}
	public static int sumOfDigits(int input){
        if(input == 0)
            return 0;
        int smallOutput= sumOfDigits(input/10);
        int Output= input%10 + smallOutput;
    return Output;
	}	
}
