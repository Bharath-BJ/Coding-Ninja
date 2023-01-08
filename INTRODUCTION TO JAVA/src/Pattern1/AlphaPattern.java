package Pattern1;

import java.util.Scanner;

/*
 * Code : Alpha Pattern
Send Feedback
Print the following pattern for the given N number of rows.
Pattern for N = 3
 A
 BB
 CCC
Input format :
Integer N (Total no. of rows)
Output format :
Pattern in N lines
Constraints
0 <= N <= 26
Sample Input 1:
7
Sample Output 1:
A
BB
CCC
DDDD
EEEEE
FFFFFF
GGGGGGG
Sample Input 2:
6
Sample Output 2:
A
BB
CCC
DDDD
EEEEE
FFFFFF/
 */
public class AlphaPattern {
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
            char p= (char)('A'+i-1);  
            int j=1;                 
            while(j<=i)
                   
                {
                    System.out.print(p);
                    j=j+1;
                }
            System.out.println();
            i=i+1;
        }    

		
	}
}
