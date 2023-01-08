package Pattern2;

import java.util.Scanner;

/*
 * Code : Triangle of Numbers
Send Feedback
Print the following pattern for the given number of rows.
Pattern for N = 4



The dots represent spaces.



Input format :
Integer N (Total no. of rows)
Output format :
Pattern in N lines
Constraints :
0 <= N <= 50
Sample Input 1:
5
Sample Output 1:
           1
         232
       34543
     4567654
   567898765
Sample Input 2:
4
Sample Output 2:
           1
         232
       34543
     4567654/
 */
public class TriangleOfNumber {
	public static void main(String[] args) {
		/* Your class should be named Solution.
	 	* Read input as specified in the question.
	 	* Print output as specified in the question.
		*/
        int n;
        Scanner s= new Scanner(System.in);
        n=s.nextInt();
        int i=1;
        while(i<=n)
        {
            int spaces=1;
            while(spaces<=n-i)
            {
                System.out.print(' ');
                spaces+=1;
            }
            int num1=1;
            int p1=i;
            while(num1<=i)
            {
                System.out.print(p1);
                num1+=1;
                p1+=1;
            }
            
            int num2=1;
            int p2=p1-2;
            while(num2<=i-1 )
            {
                
                    System.out.print(p2);
                    num2+=1;
                    p2-=1;
                
            }
            System.out.print("\n");
            i+=1;

        }
	}
}
