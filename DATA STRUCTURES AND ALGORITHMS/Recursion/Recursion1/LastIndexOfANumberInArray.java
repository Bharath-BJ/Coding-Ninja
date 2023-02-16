package Recursion1;
import java.util.Scanner;

public class LastIndexOfANumberInArray {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		int n= s.nextInt();
		int[] input=new int[n];
		for(int i=0;i<n;i++)
		{
			input[i]=s.nextInt();
		}
		int x= s.nextInt();
		System.out.println(lastIndex1(input, x));
		System.out.println(lastIndex2(input, x));
	}
	public static int lastIndex1(int input[], int x) 
	{
	    int n=input.length;
		if(n== 0)
	        return -1;
	    if(input[n-1]==x)
        	return n-1;
	    int temp[]= new int[input.length-1];
	    for(int i=0;i<temp.length;i++)
	    {
	        temp[i]=input[i];
	    } 
	    int smallOutput= lastIndex1(temp,x);
	    if(smallOutput==-1)
	    	return -1;
	    else
	        return smallOutput;     
	}
	public static int lastIndex2(int input[], int x) 
	{
		return helper(input,x,0,input.length-1);
	}
	private static int helper(int[] input, int x, int si, int ei) 
	{
		if(si>=ei)
			return -1;
		if(input[ei]==x)
			return ei;
		return helper(input,x,si,ei-1);
	}	
}
