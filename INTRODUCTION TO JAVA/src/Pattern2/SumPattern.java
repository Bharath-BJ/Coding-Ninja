package Pattern2;

import java.util.Scanner;

/*
 * Sum Pattern
Send Feedback
Write a program to print triangle of user defined integers sum.
Input Format :
A single integer, N
Output Format :
Required Pattern
Constraints :
0 <= N <= 50
Sample Input 1 :
3
Sample Output 1 :
1=1
1+2=3
1+2+3=6
Sample Input 2 :
 5
Sample Output 2 :
1=1
1+2=3
1+2+3=6
1+2+3+4=10
1+2+3+4+5=15
 */
public class SumPattern {

	public static void main(String[] args) {
		// Write your code here
        int n,i,sum=0;
        String str1="",str2="";
        Scanner s =new Scanner(System.in);
        n=s.nextInt();
        for(i=1;i<=n;i++)
        {
            if(i==1)
            {
                sum+=i;
                str1+=+i+"="+sum;
                System.out.println(str1);
                str2=str2+i;
            }
            else
            {
            str2+="+"+i;
            sum+=i;
            System.out.println(str2+"="+sum);
            }
       
        }
	}
}
