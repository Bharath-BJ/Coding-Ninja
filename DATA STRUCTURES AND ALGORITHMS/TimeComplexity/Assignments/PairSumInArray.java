package Assignments;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;

/*
 * Pair sum in array
Send Feedback
You have been given an integer array/list(ARR) and a number 'num'. Find and return the total number of pairs in the array/list which sum to 'num'.
Note:
Given array/list can contain duplicate elements. 
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the first array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Third line contains an integer 'num'.
Output format :
For each test case, print the total number of pairs present in the array/list.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^4
0 <= num <= 10^9

Time Limit: 1 sec
Sample Input 1:
1
9
1 3 6 2 5 4 3 2 4
7
Sample Output 1:
7
Sample Input 2:
2
9
1 3 6 2 5 4 3 2 4
12
6
2 8 10 5 -2 5
10
Sample Output 2:
0
2
Sample Input 3:
1
4
0 6 0 0 
6
Sample Output 3:
3

 Explanation for Input 2:
Since there doesn't exist any pair with sum equal to 12 for the first query, we print 0.

For the second query, we have 2 pairs in total that sum up to 10. They are, (2, 8) and (5, 5).*/
public class PairSumInArray {
	public static void main(String[] args) 
    {
	    Scanner s=new Scanner(System.in);
	    int t,sum;
	    int[] arr;
//	    System.out.println("No of testcases");
	    t=s.nextInt();
	    for(int i=1;i<=t;i++)
	    {
	        arr=input();
	        sum=s.nextInt();
	        System.out.println(pairSum(arr,sum));
	        System.out.println(pairSumBetter(arr,sum));
	    }
    }
	public static int [] input() 
    {
        Scanner s=new Scanner(System.in);
//        System.out.println("Enter the size of array");
        int n=s.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<=n-1;i++)
        {
//        	System.out.println("Enter element at "+i);
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

	public static int pairSum(int[] arr, int sum) // this method is not complete solution , I have to work on count when repetitive terms exists
	{
	    Arrays.sort(arr);
	    int si=0,ei=arr.length-1,count=0;
	    while(si<ei)
	    {
	        if(arr[si]+arr[ei] < sum)
	        {
	            si++;
	        }
	        else if(arr[si]+arr[ei] > sum)
	        {
	            ei--;
	        }
	        else
	        {
	            count++;
	            si++;
	            ei--;
	        }
	    }
	return count;
	}
	public static int pairSumBetter(int [] arr, int sum) // So far I have not learned hashmap now I'm using it only to score in CN assignments
	{
	    HashMap <Integer,Integer> m = new HashMap<>();
	    int count = 0;
	    for (int i = 0; i < arr.length; i++) 
	    {
	        if (m.containsKey(sum - arr[i])) 
	            count += m.get(sum - arr[i]);
	        if(m.containsKey(arr[i]))
	            m.put(arr[i], m.get(arr[i])+1);
	        else
	            m.put(arr[i], 1);
	    }
	return count;    
	}
}
	
	