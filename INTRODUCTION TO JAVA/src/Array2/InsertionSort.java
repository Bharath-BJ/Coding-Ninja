package Array2;

import java.util.Scanner;

public class InsertionSort {
	 public static void insertionSort(int[] arr) {
	    	//Your code goes here
	         int n=arr.length,i,j,temp;
	        for(i=1;i<=n-1;i++)    
	        {
	            temp=arr[i];
	            j=i-1;
	            while(j>=0 && arr[j]>temp)
	            {
	                arr[j+1]=arr[j];
	                j--;
	            }
	            arr[j+1]=temp;
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
		        insertionSort(arr);
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
