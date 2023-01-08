package Test1;

import java.util.Scanner;

/*
 * Number Star pattern 1
Send Feedback
Print the following pattern for given number of rows.
Input format :
Integer N (Total number of rows)
Output Format :
Pattern in N lines
Sample Input :
   5
Sample Output :
 5432*
 543*1
 54*21
 5*321
 *4321
 */
public class NumberStarPattern {
	public static void main(String[] args) {
		// Write your code here
		 int n,i,j;
        Scanner s=new Scanner(System.in);
        n=s.nextInt();
        for(i=1;i<=n;i++)
        {
            for(j=n;j>0;j--)
            {
                if(i==j)
                {
                    System.out.print("*");
                    continue;
                }
                System.out.print(j);
            }
            System.out.print("\n");
        }
	}
}
