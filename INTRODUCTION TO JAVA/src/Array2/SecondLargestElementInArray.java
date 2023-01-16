package Array2;

import java.util.Scanner;

public class SecondLargestElementInArray {
	 public static int secondLargestElement(int[] arr) {
	    	//Your code goes here
	     int n=arr.length,i,SL=Integer.MIN_VALUE,L=Integer.MIN_VALUE;    
	     for(i=0;i<=n-1;i++)
	     {
	         if(arr[i]>L)
	         {
	            SL=L;
	            L=arr[i];     
	         }
	         else if(arr[i]!=L && arr[i]>SL)
	            SL=arr[i];
	      }
	        return SL;
	    }
	public static void main(String[] args) 
	{
	    int t;
	    int arr[];
	    Scanner s=new Scanner(System.in);
	    t=s.nextInt();
	    for(int i=1;i<=t;i++)
	    {
	        
	        arr=input();
	        System.out.println(secondLargestElement(arr));
	    }
	    
	    
	}
	 
	public static int [] input() 
	{
		Scanner s=new Scanner(System.in);
		int n=s.nextInt();
		int arr[]=new int[n];
		for(int i=0;i<=n-1;i++)
		{
		   arr[i]=s.nextInt();
		}
		return arr;  
	}
	public static void print(int [] arr) 
	{
		int n=arr.length,i;
		for(i=0;i<=n-1;i++)
		{
		   System.out.print(arr[i]+" ");
		}    
	}
}
