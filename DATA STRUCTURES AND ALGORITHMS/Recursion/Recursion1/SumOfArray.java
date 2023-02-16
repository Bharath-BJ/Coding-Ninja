package Recursion1;
import java.util.Scanner;

/*Sum Of Array
Send Feedback
Given an array of length N, you need to find and return the sum of all elements of the array.
Do this recursively.
Input Format :
Line 1 : An Integer N i.e. size of array
Line 2 : N integers which are elements of the array, separated by spaces
Output Format :
Sum
Constraints :
1 <= N <= 10^3
Sample Input 1 :
3
9 8 9
Sample Output 1 :
26
Sample Input 2 :
3
4 2 1
Sample Output 2 :
7    
*/
public class SumOfArray {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		int n= s.nextInt();
		int[] input=new int[n];
		for(int i=0;i<n;i++)
		{
			input[i]=s.nextInt();
		}
		System.out.println(sum1(input));
		System.out.println(sum2(input));
	}
	public static int sum1(int input[]) {
        if(input.length==1)
        {
            return input[0];
        }
        int [] temp= new int[input.length-1];
        for(int i=0;i<temp.length;i++)
        {
            temp[i]=input[i+1];
        }
        int output = input[0]+ sum1(temp);
    return output;	
	}
	public static int sum2(int input[])  // Using this indexing method we can avoid creating temp array accomodating extra space
	{
		return helper(input,0,input.length-1);	
	}
	public static int helper(int[] input,int si,int ei)
	{
		if(si==ei)
			return input[ei];
		int smallOutput=helper(input,si+1,ei);
		int output=input[si]+smallOutput;
	return output;
	}
}
