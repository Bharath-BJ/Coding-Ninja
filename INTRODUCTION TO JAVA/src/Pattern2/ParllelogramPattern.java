package Pattern2;

import java.util.Scanner;

/*
 * Parallelogram Pattern
Send Feedback
Write a program to print parallelogram pattern for the given N number of rows.
For N = 4



The dots represent spaces.
Input Format :
 A single integer : N
Output Format :
Required Pattern
Constraints :
0 <= N <= 50
Sample Input 1 :
3
Sample Output 1 :
***
 ***
  ***
Sample Input 2 :
5
Sample Output 2 :
*****
 *****
  *****
   *****
    *****
    */

public class ParllelogramPattern {
	public static void main(String[] args) {
		// Write your code here
        int n;
        Scanner s= new Scanner(System.in);
        n=s.nextInt();
        approach1(n);
        approach2(n);
	}
	public static void approach1(int n)
	{
		 for(int i=0;i<n;i++)
	        {
	            for(int j=0;j<i;j++)
	            {
	                System.out.print(" ");

	            }
	            for(int j=1;j<=n;j++)
	            {
	                System.out.print("*");
	            }
	            System.out.print("\n");
	        }

	}
	public static void approach2(int n) //Another somewhat complex approach
	{
		  for(int i=1;i<=n;i++)
	        {
	            for(int j=1;j<=i-1;j++)
	            {
	                System.out.print(" ");

	            }
	            for(int j=1;j<=n-i+1;j++)
	            {
	                System.out.print("*");   
	            }
	            for(int j=1;j<=i-1;j++)
	            {
	                System.out.print("*");
	            }
	            System.out.print("\n");
	        }
	}
	
}
