package Pattern2;

import java.util.Scanner;

/*
 * Code : Diamond of stars
Send Feedback
Print the following pattern for the given number of rows.
Note: N is always odd.


Pattern for N = 5



The dots represent spaces.



Input format :
N (Total no. of rows and can only be odd)
Output format :
Pattern in N lines
Constraints :
1 <= N <= 49
Sample Input 1:
5
Sample Output 1:
  *
 ***
*****
 ***
  *
Sample Input 2:
3
Sample Output 2:
  *
 ***
  *
  */

public class DiamondOfStar {
	public static void main(String[] args) {
        // Write your code here
        int n,i,j,k,a,b,c;
        Scanner s=new Scanner(System.in);
        n=s.nextInt();
        int n1=(n+1)/2,n2=n/2;
        for(i=1;i<=n1;i++)
        {
            for(j=1;j<=n1-i;j++)
            {
                System.out.print(" ");
            }
            for(k=1;k<=2*i-1;k++)
            {
                System.out.print("*");
            }
            System.out.print("\n");
        }
        for(a=1;a<=n2;a++)
        {
            for(b=1;b<=a;b++)
            {
                System.out.print(" ");
            }
            for(c=1;c<=n-2*a;c++)
            {
                System.out.print("*");
            }
            System.out.print("\n");
        }
    }

}
