package Assignments;

import java.util.Scanner;

/*
 * Count Zeros
Send Feedback
Given an integer N, count and return the number of zeros that are present in the given integer using recursion.
Input Format :
Integer N
Output Format :
Number of zeros in N
Constraints :
0 <= N <= 10^9
Sample Input 1 :
0
Sample Output 1 :
1
Sample Input 2 :
00010204
Sample Output 2 :
2
Explanation for Sample Output 2 :
Even though "00010204" has 5 zeros, the output would still be 2 because when you convert it to an integer, it becomes 10204.
Sample Input 3 :
708000
Sample Output 3 :
4/
 */
public class CountNoOfZeros {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int input = s.nextInt();
		System.out.println(countZerosRec(input));
	}
	public static int countZerosRec(int input){
        if(input == 0)
            return 1;
        if(input < 10)
            return 0;
        // This is short solution statement
        // return countZerosRec(input/10) + countZerosRec(input%10); 
        int smallOutput=countZerosRec(input/10);
        int lastDigit=(input%10==0)? 1 : 0 ;
        int Output=smallOutput+lastDigit;
    return Output;
	}
}
