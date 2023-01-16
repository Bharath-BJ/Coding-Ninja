package Array2;

import java.util.Scanner;

public class MergeTwoSortedArrays {
	public static int[] merge(int arr1[], int arr2[]) {
    	//Your code goes here
        int m=arr1.length,n=arr2.length,i=0,j=0,k=0;
        int arr[]=new int [m+n];
        
            while(i<=m-1 && j<=n-1)
            {
                if(arr1[i]<=arr2[j])
                {
                    arr[k]=arr1[i];
                    i++;
                    k++;
                }
                else
                {
                    arr[k]=arr2[j];
                    j++;
                    k++;
                }

            }
            while(i<m)
            {
                arr[k]=arr1[i];
                i++;
                k++;
            }
            while(j<n)
            {
                arr[k]=arr2[j];
                j++;
                k++;
            }
            return arr;
    }
	 public static void main(String[] args) 
	    {
	    int t;
	    int arr1[],arr2[],arr3[];
	    Scanner s=new Scanner(System.in);
	    t=s.nextInt();
	    for(int i=1;i<=t;i++)
	    {
	        
	        arr1=input();
	        arr2=input();
	        arr3=merge(arr1,arr2);
	        print(arr3);
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
