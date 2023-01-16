package Array2;

import java.util.Scanner;

	public class SelectionSort {
		public static void selectionSort(int[] arr) {
	    	//Your code goes here
	        
	        int i,j,n=arr.length;
	        for(i=0;i<=n-2;i++)
	        {
	            int min=Integer.MAX_VALUE;
	            int minindex=-1;
	            for(j=i;j<=n-1;j++)
	            {
	                if(min>arr[j])
	                {
	                    min=arr[j];
	                    minindex=j;   
	                                 
	                }
	            }
	            int temp=arr[minindex];
	            arr[minindex]=arr[i];
	            arr[i]=temp;
	        
	        }    
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
	        selectionSort(arr);
	        print(arr);
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
