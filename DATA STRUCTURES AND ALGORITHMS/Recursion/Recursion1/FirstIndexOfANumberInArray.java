package Recursion1;
import java.util.Scanner;

/*First Index Of a Number in an Array - Question
Send Feedback
Given an array of length N and an integer x, you need to find and return the first index of integer x present in the array. Return -1 if it is not present in the array.
First index means, the index of first occurrence of x in the input array.
Do this recursively. Indexing in the array starts from 0.
Input Format :
Line 1 : An Integer N i.e. size of array
Line 2 : N integers which are elements of the array, separated by spaces
Line 3 : Integer x
Output Format :
first index or -1
Constraints :
1 <= N <= 10^3
Sample Input :
4
9 8 10 8
8
Sample Output :
1
*/
public class FirstIndexOfANumberInArray {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		int n= s.nextInt();
		int[] input=new int[n];
		for(int i=0;i<n;i++)
		{
			input[i]=s.nextInt();
		}
		int x= s.nextInt();
		System.out.println(firstIndex1(input, x));
		System.out.println(firstIndex2(input, x));
	}
	public static int firstIndex1(int input[], int x) {
	    if(input.length == 0)
	        return -1;
	    else if(input[0] == x)
	        return 0;
	    int temp[]= new int[input.length-1];
	    for(int i=0;i<temp.length;i++)
	    {
	        temp[i]=input[i+1];
	    } 
	    int smallOutput= firstIndex1(temp,x);
	    int output;
	    if(smallOutput == -1)
	        output=-1;
	    else
	        output = 1+ smallOutput;
	    return output;
	}	
	public static int firstIndex2(int input[], int x) {
		return helper(input,x,0,input.length-1);
	}
	private static int helper(int[] input, int x, int si, int ei) {
		if(si>=ei)
			return -1;
		if(input[si]==x)
			return si;
		return helper(input,x,si+1,ei);
	}	
}
