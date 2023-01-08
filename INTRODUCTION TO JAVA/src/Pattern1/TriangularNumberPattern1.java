package Pattern1;

import java.util.Scanner;
/*
 * Code : Triangle Number Pattern
Send Feedback
Print the following pattern for the given N number of rows.
Pattern for N = 4
1
22
333
4444
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
22
333
4444
55555
Sample Input 2:
6
Sample Output 2:
1
22
333
4444
55555
666666/
 */
public class TriangularNumberPattern1 {

public static void main(String[] args) {
		
		/* Your class should be named Solution.
	 	* Read input as specified in the question.
	 	* Print output as specified in the question.
		*/
        int n;               //int j=1; when j declared here itis not used inside a loop within a loop
        Scanner s= new Scanner(System.in);
        n=s.nextInt();
        int i=1;
        while(i<=n)
        {
            int j=1;                  // I don't know why but for some reason,declare the j only inside the loops,error occurs when declared in the beginning of the function
            while(j<=i)
            {
                System.out.print(i);
                j=j+1;
            }
            System.out.println();
            i=i+1;
        }    
	}
}
