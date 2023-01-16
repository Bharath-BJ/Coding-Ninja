package Array2;

import java.util.Scanner;

public class BinarySearch {
	public static int binarySearch(int[] arr, int x) {
    	//Your code goes here
        int n=arr.length,s=0,e=n-1,m;
        while(s<=e)
        {
            m=(s+e)/2;
            if(arr[m]<x)
            {
                s=m+1;
            }
            else if(arr[m]>x)
            {
                e=m-1;
            }
            else
            {
                return m;
            }
        }
        return -1;
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
	        int x=s.nextInt();
	        System.out.println( binarySearch(arr,x));;
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
