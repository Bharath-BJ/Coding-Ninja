package Pattern2;

import java.util.Scanner;

/*
 * Code : Star Pattern
Send Feedback
Print the following pattern
Pattern for N = 4



The dots represent spaces.



Input Format :
N (Total no. of rows)
Output Format :
Pattern in N lines
Constraints :
0 <= N <= 50
Sample Input 1 :
3
Sample Output 1 :
   *
  *** 
 *****
Sample Input 2 :
4
Sample Output 2 :
    *
   *** 
  *****
 *******
 */
 
public class StarPattern {
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
            while(num1<=i)
            {
                System.out.print("*");
                num1+=1;        
            }
            int num2=i-1;
            while(num2>=1)
            {
                System.out.print("*");
                num2-=1;
            }
            System.out.print("\n");
            i+=1;
        }

		
	}

}
