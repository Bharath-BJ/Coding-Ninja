package Pattern2;

import java.util.Scanner;

/*
 * Odd Square
Send Feedback
Write a program to print the pattern for the given N number of rows.
For N = 4
1357
3571
5713
7135
Input Format :
A single integer: N
Output Format :
Required Pattern
Constraints :
0 <= N <= 50
Sample Input 1 :
3
Sample Output 1 :
135
351
513
Sample Input 2 :
 5
Sample Output 2 :
13579
35791
57913
79135
91357
 */
public class OddSquarePattern {
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
		for(int i=0;i<n;i++) // Here having the initial value of i as zero helps
		{
			int p=2*i+1;
			for(int j=1;j<=n;j++)
			{
				if(p<2*n)
					System.out.print(p);
				else
				{
					p=p-2*n;
					System.out.print(p);
				}
				p=p+2;
			}
			System.out.println();
		}
	}
	public static void approach2(int n) //Another somewhat complex approach
	{
		int p=1; 
		int i=1;
        while(i<=n)
        {  
            int j=1;    
            while(j<=n)
            {
                    if(p<2*n)
                        System.out.print(p);
                    else
                        System.out.print(p-2*n);
            j=j+1;
            p=p+2;
            }
//            System.out.println(" p value is "+p);
            System.out.println();
            i=i+1;
            p=p-(2*n-2);  // As we didn't reinitialize the p value while printing,here we have to do it
                
            
        }    
	}
}
