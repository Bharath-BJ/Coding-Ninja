package Array1;

import java.util.Scanner;

/*
 * Swap Alternate
Send Feedback
You have been given an array/list(ARR) of size N. You need to swap every pair of alternate elements in the array/list.
You don't need to print or return anything, just change in the input array itself.
Input Format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.
Output Format :
For each test case, print the elements of the resulting array in a single row separated by a single space.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^5
Time Limit: 1sec
Sample Input 1:
1
6
9 3 6 12 4 32
Sample Output 1 :
3 9 12 6 32 4
Sample Input 2:
2
9
9 3 6 12 4 32 5 11 19
4
1 2 3 4
Sample Output 2 :
3 9 12 6 32 4 11 5 19 
2 1 4 3 /
 */
public class SwapAlternate {
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
	 public static void swapAlternate(int [] arr) 
	    {
	        int n=arr.length,i,temp;
	        if(n%2==0)
	        {
	            for(i=0;i<=n-1;i=i+2)
	            {
	                temp=arr[i];
	                arr[i]=arr[i+1];
	                arr[i+1]=temp;
	            }
	        }
	        else
	        {
	            for(i=0;i<=n-2;i=i+2)            // This one loop is enough as suggested by CN solution
	// Here we ignore the last element, i)in case of even last element is not used in the iteration 
	                                // ii)in case of odd last element does not have another element to swap so we leave as it is
	            {
	                temp=arr[i];
	                arr[i]=arr[i+1];
	                arr[i+1]=temp;
	            }
	        }      
	    }
	    public static void main(String[] args) 
	    {
	        int t,i,arr[];
	        Scanner s=new Scanner(System.in);
	        t=s.nextInt();
	        for(i=1;i<=t;i++)
	        {
	            arr=input();
	            swapAlternate(arr);
	            print(arr);
	        }
	        
	    }
}
