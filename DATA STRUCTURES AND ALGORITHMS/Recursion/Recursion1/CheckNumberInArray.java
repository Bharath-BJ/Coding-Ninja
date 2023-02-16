package Recursion1;
import java.util.Scanner;

/*
 * Check Number in Array
Send Feedback
Given an array of length N and an integer x, you need to find if x is present in the array or not. Return true or false.
Do this recursively.
Input Format :
Line 1 : An Integer N i.e. size of array
Line 2 : N integers which are elements of the array, separated by spaces
Line 3 : Integer x
Output Format :
'true' or 'false'
Constraints :
1 <= N <= 10^3
Sample Input 1 :
3
9 8 10
8
Sample Output 1 :
true
Sample Input 2 :
3
9 8 10
2
Sample Output 2 :
false
 */
public class CheckNumberInArray {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		int n= s.nextInt();
		int[] input=new int[n];
		for(int i=0;i<n;i++)
		{
			input[i]=s.nextInt();
		}
		int x=s.nextInt();
		System.out.println(checkNumber1(input, x));
		System.out.println(checkNumber2(input, x));
	}	
	public static boolean checkNumber1(int input[], int x) {
		if(input.length == 0)
	    {
	        return false;
	    }
	    else if(input[0] == x)
	    {
	        return true;
	    }
	    else
	    {
	        int temp[]= new int[input.length-1];
	        for(int i=0;i<temp.length;i++)
	        {
	            temp[i]=input[i+1];
	        } 
	        return checkNumber1(temp,x);
	    }
	}
	public static boolean checkNumber2(int input[], int x) // Using this indexing method we can avoid creating temp array accomodating extra space
	{
		return helper(input,x,0,input.length-1);
	}
	private static boolean helper(int[] input, int x,int si, int ei) {
	    if(input[si] == x)
	        return true;
	    if (si>=ei)
	    	return false;
	    else
			return helper(input,x,si+1,ei);
	}
}
