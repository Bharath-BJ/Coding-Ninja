package Array1;

import java.util.Scanner;

/*
 * Sort 0 1
Send Feedback
You have been given an integer array/list(ARR) of size N that contains only integers, 0 and 1. Write a function to sort this array/list. Think of a solution which scans the array/list only once and don't require use of an extra array/list.
Note:
You need to change in the given array/list itself. Hence, no need to return or print anything. 
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers(all 0s and 1s) representing the elements in the array/list.
Output format :
For each test case, print the sorted array/list elements in a row separated by a single space.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^5
Time Limit: 1 sec
Sample Input 1:
1
7
0 1 1 0 1 0 1
Sample Output 1:
0 0 0 1 1 1 1/
 */
public class Sort0s1s {
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
	    public static void swap(int []arr,int s,int e) 
	    {
	        int temp;
	        temp=arr[s];
	        arr[s]=arr[e];
	        arr[e]=temp;        
	    }
	    // public static void Sort(int []arr)    // This method is straight forward approach but long process so to avoid time limitation error I had used swap function
	    // {
	    //     int n=arr.length,s=0,e=n-1,temp;
	    //     while(s<e)
	    //     {
	    //         if(arr[s]==1 && arr[e]==0)
	    //         {
	    //             swap(arr,s,e);
	    //             s++;
	    //             e--;
	    //         }
	    //         else if(arr[s]==1 && arr[e]==1)
	    //         {
	    //             swap(arr,s,e);
	    //             e--;
	    //         }
	    //         else if(arr[s]==0 && arr[e]==0)
	    //         {
	    //             swap(arr,s,e);
	    //             s++;
	    //         }
	    //         else 
	    //         {
	    //             s++;
	    //             e--;
	    //         }
	    //     }
	        
	    // }
	    public static void Sort1(int [] arr)  // This Method is swapping whenever 1 is encounter - My method
	    {
	        int n=arr.length,i=0,ones=0,temp;
	        while(i<n)
	        {
	            if(arr[i]==1)
	            {
	                temp=arr[i];
	                arr[i]=arr[ones];
	                arr[ones]=temp;
	                ones++;
	            }
	            else
	            {
	                i++;
	            }
	        }    
	        print(arr);  
	    }
	    public static void Sort2(int [] arr) // This Method is swapping whenever 0 is encounter - CN Suggestion method
	    {
	         int n=arr.length,i=0,Zero=0,temp;
	         for(i=0;i<n;i++)
	         {
	             if(arr[i]==0)
	             {
	                 temp=arr[i];
	                 arr[i]=arr[Zero];
	                 arr[Zero]=temp;
	                 Zero++;
	             }
	           
	         }    
	         print(arr);  
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
	        Sort1(arr);
//	        Sort2(arr);
	        
	    }
	    
	    
	}
}
