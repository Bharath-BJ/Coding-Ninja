package Assignments;

import java.util.Scanner;
import java.util.Arrays;
/*
 * Find the Unique Element
Send Feedback
You have been given an integer array/list(ARR) of size N. Where N is equal to [2M + 1].
Now, in the given array/list, 'M' numbers are present twice and one number is present only once.
You need to find and return that number which is unique in the array/list.
 Note:
Unique element is always present in the array/list according to the given condition.
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.
Output Format :
For each test case, print the unique element present in the array.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^6

Time Limit: 1 sec
Sample Input 1:
1
7
2 3 1 6 3 6 2
Sample Output 1:
1
Sample Input 2:
2
5
2 4 7 2 7
9
1 3 1 3 6 6 7 10 7
Sample Output 2:
4
10*/
public class UniqueElementInArray {
	public static void main(String[] args) 
    {
	    Scanner s=new Scanner(System.in);
	    int t;
	    int[] arr;
//	    System.out.println("No of testcases");
	    t=s.nextInt();
	    for(int i=1;i<=t;i++)
	    {
	        arr=input();
	        System.out.println(findUnique(arr));
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
	public static int findUnique(int[] arr) 
    {
		Arrays.sort(arr);
		System.out.println(Arrays.toString(arr));
        int i = 0;
        while(i < arr.length-1)
        {
            if(arr[i] == arr[i+1])
                i+=2;
            else
                return arr[i];
        }
    return arr[i];
	}
}
