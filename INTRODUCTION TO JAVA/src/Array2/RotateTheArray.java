package Array2;

import java.util.Scanner;

public class RotateTheArray {
	 public static int[] reverse(int [] arr,int s,int e) 
	    {
	        int temp;
	        while(s<e)
	        {
	            temp=arr[s];
	            arr[s]=arr[e];
	            arr[e]=temp;
	            s++;
	            e--;
	        }
	        return arr;

	    }

	    public static void rotate(int[] arr, int d) {
	    	//Your code goes here
	       int n=arr.length;
	        arr=reverse(arr,0,n-1);
	        arr=reverse(arr,0,n-1-d);
	        arr=reverse(arr,n-d,n-1);
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
	        int d=s.nextInt();
	        rotate(arr,d);
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
