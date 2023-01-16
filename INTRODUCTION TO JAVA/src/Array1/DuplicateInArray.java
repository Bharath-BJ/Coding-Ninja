package Array1;

import java.util.Scanner;

/*
 * Find Duplicate
Send Feedback
You have been given an integer array/list(ARR) of size N which contains numbers from 0 to (N - 2). Each number is present at least once. That is, if N = 5, the array/list constitutes values ranging from 0 to 3 and among these, there is a single integer value that is present twice. You need to find and return that duplicate number present in the array.
Note :
Duplicate number is always present in the given array/list.
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.
Output Format :
For each test case, print the duplicate element in the array/list.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^3
Time Limit: 1 sec
Sample Input 1:
1
9
0 7 2 5 4 7 1 3 6
Sample Output 1:
7
Sample Input 2:
2
5
0 2 1 3 1
7
0 3 1 5 4 3 2
Sample Output 2:
1
3/
 */
public class DuplicateInArray {
	 public static int [] input() 
	    {
	        Scanner s= new Scanner(System.in);
	        int n=s.nextInt();
	        int arr[]=new int [n];
	        for(int i=0;i<n-1;i++)
	        {
	            arr[i]=s.nextInt();
	        }
	        return arr;
	        
	    }
	    public static int duplicate(int[] arr) 
	    {
	        int n=arr.length,i,j,dup=0;
	        outerloop:
	        for(i=0;i<=n-1;i++)
	        {
	            innerloop:
	            for(j=i+1;j<=n-1;j++)
	            {
	                if(arr[i]==arr[j])
	                {
	                dup=arr[j];
	                break outerloop;
	                }
	                //  This method is more efficient coz here we can use this to find the non-duplicate element as well
	                // if(i==j)
	                // {
	                //     continue;
	                // }
	                
	                // if(arr[i]==arr[j])
	                // {
	                //     return arr[i];
	                // }
	            }
	        }
	        return dup;
	    }        
	    public static void main(String[] args) {
	        int t;
	        Scanner s=new Scanner(System.in);
	        int arr[];
	        t=s.nextInt();
	        for(int i=1;i<=t;i++)
	        {
	            arr=input();
	            System.out.println(duplicate(arr));
	        }
	        
	        
	    }
}
