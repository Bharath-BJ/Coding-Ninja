package Array2;

import java.util.Scanner;

public class PushZerosToEnd {
	 public static void pushZerosAtEnd(int[] arr) {
	    	//Your code goes here
	        int n=arr.length,i,j=0,temp;
	        for(i=0;i<=n-1;i++)        
	        {
	            
	            if(arr[i]!=0)
	            {
	                temp=arr[i];
	                arr[i]=arr[j];
	                arr[j]=temp;
	                j++;
	            }
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
	        pushZerosAtEnd(arr);
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
