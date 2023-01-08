package Pattern2;

import java.util.Scanner;
/*
 * Half Diamond Pattern
Send Feedback
Write a program to print N number of rows for Half Diamond pattern using stars and numbers
Note : There are no spaces between the characters in a single line.


Input Format :
A single integer: N
Output Format :
Required Pattern
Constraints :
0 <= N <= 50
Sample Input 1 :
3
Sample Output 1 :
*
*1*
*121*
*12321*
*121*
*1*
*
Sample Input 2 :
 5
Sample Output 2 :
*
*1*
*121*
*12321*
*1234321*
*123454321*
*1234321*
*12321*
*121*
*1*
*
 */
public class HalfDiamondPattern {

	public static void main(String[] args) {
		 int n;
	     Scanner s= new Scanner(System.in);
	     n=s.nextInt();
	     for(int i=0;i<=n;i++)
	     {
	    	 int p1=1,p2=i-1; // Having two print values makes it easy
	    	 for(int j=0;j<2*i+1;j++)
		     {
	    		 if(j==0 || j==2*i)
	    			 System.out.print("*");
	    		 else 
	    		 {
	    			 if(p1<=i)
	    				 System.out.print(p1++);
	    			 else
	    				 System.out.print(p2--);
	    		 } 
	    	 }
		     System.out.println();
	     }
	     for(int i=n-1;i>=0;i--)
	     {
	    	 int p1=1,p2=i-1; // Having two print values makes it easy
	    	 for(int j=0;j<2*i+1;j++)
		     {
	    		 if(j==0 || j==2*i)
	    			 System.out.print("*");
	    		 else 
	    		 {
	    			 if(p1<=i)
	    				 System.out.print(p1++);
	    			 else
	    				 System.out.print(p2--);
	    		 } 
		     }
		     System.out.println();
	     }
	}

}
