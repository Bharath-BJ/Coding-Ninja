package Array2;

import java.util.Scanner;

/*
 * Sort 0 1 2
Send Feedback
You are given an integer array/list(ARR) of size N. It contains only 0s, 1s and 2s. Write a solution to sort this array/list in a 'single scan'.
'Single Scan' refers to iterating over the array/list just once or to put it in other words, you will be visiting each element in the array/list just once.
Note:
You need to change in the given array/list itself. Hence, no need to return or print anything. 
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers(all 0s, 1s and 2s) representing the elements in the array/list.
Output Format :
For each test case, print the sorted array/list elements in a row separated by a single space.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^5
Time Limit: 1 sec
Sample Input 1:
1
7
0 1 2 0 2 0 1
Sample Output 1:
0 0 0 1 1 2 2 
Sample Input 2:
2
5
2 2 0 1 1
7
0 1 2 0 1 2 0
Sample Output 2:
0 1 1 2 2 
0 0 0 1 1 2 2
/
 */
public class Sort0s1s2s {
	 public static void sort012(int[] arr){
	       int n = arr.length,i=0,start =0,end = n-1;
	        while(i<n)
	        {
	            if(arr[i]==0 && i>start){
	                int temp =arr[start];
	                arr[start]= arr[i];
	                arr[i]=temp;

	                start++;
	            }
	            else if(arr[i]==2 && i<end){
	                int temp = arr[end];

	                arr[end]= arr[i];
	                arr[i]=temp;
	                end--;
	            }
	            else 
	                i++;
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
			        sort012(arr);
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
