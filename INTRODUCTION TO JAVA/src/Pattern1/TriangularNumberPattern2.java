package Pattern1;

import java.util.Scanner;

/*
 * Code : Reverse Number Pattern
Send Feedback
Print the following pattern for the given N number of rows.
Pattern for N = 4
1
21
321
4321
Input format :
Integer N (Total no. of rows)
Output format :
Pattern in N lines
Constraints
0 <= N <= 50
Sample Input 1:
5
Sample Output 1:
1
21
321
4321
54321
Sample Input 2:
6
Sample Output 2:
1
21
321
4321
54321
654321/
 */
public class TriangularNumberPattern2 {
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
            int j=1;
            int p=i;
            while(j<=i)
            {
                System.out.print(p);
                j=j+1;
                p=p-1;
            }
            System.out.print("\n");
            i=i+1;
        }    

		
	}	
}
