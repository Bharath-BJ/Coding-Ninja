package Array2;

import java.util.Scanner;

public class BubbleSort {
	public static void bubbleSort(int[] arr){
    	//Your code goes here
         int i,j,n=arr.length,temp;
        for(i=0;i<=n-2;i++)
        {
           
            for(j=0;j<=n-2-i;j++)  
            {
                if(arr[j]>arr[j+1])
                {
                    temp=arr[j];
                    arr[j]=arr[j+1];
                    arr[j+1]=temp;  
                                 
                }
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
		        int x=s.nextInt();
		        bubbleSort(arr);
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
