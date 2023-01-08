package Test1;

import java.util.Scanner;

/*
 * Zeros and Stars Pattern
Send Feedback
Print the following pattern
Pattern for N = 4
*000*000*
0*00*00*0
00*0*0*00
000***000
Input Format :
N (Total no. of rows)
Output Format :
Pattern in N lines
Sample Input 1 :
3
Sample Output 1 :
*00*00*
0*0*0*0
00***00
Sample Input 2 :
5
Sample Output 2 :
*0000*0000*
0*000*000*0
00*00*00*00
000*0*0*000
0000***0000
 */
public class ZeroPattern {
	public static void main(String[] args) {

		/*  Read input as specified in the question.
    		 * Print output as specified in the question.
    		 */
        int n;
        Scanner s= new Scanner(System.in);
        n=s.nextInt();
        approach1(n);
        System.out.println();
        approach2(n);
	}	
	public static void approach1(int n)
	{
		for(int i=0;i<n;i++)
		{
			for(int j=0;j<2*n+1;j++)
			{
				if(j==i || j==n || j==2*n-i) 
					System.out.print("*");
				else
					System.out.print("0");
			}
			System.out.println();
		}
	}
	public static void approach2(int n) // Another approach somewhat complex
	{
		for(int i=1;i<=n;i++)
        {
            for(int j=1;j<=n+1;j++)
            {
                if(j==i)
                {
                    System.out.print("*");
                    continue;
                }
                if(j==n+1)
                {
                    System.out.print("*");
                    continue;
                }
                System.out.print(0);
            }
            for(int j=n;j>0;j--)
            {
                if(i==j)
                {
                    System.out.print("*");
                    continue;
                }
                System.out.print(0);
            }
            System.out.print("\n");
        }
		
	}
}
