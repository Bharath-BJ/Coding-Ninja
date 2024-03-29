package Assignments;

import java.util.Scanner;
/*
 * Rotate array
Send Feedback
You have been given a random integer array/list(ARR) of size N. Write a function that rotates the given array/list by D elements(towards the left).
 Note:
Change in the input array/list itself. You don't need to return or print the elements.
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Third line contains the value of 'D' by which the array/list needs to be rotated.
Output Format :
For each test case, print the rotated array/list in a row separated by a single space.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^4
0 <= N <= 10^6
0 <= D <= N
Time Limit: 1 sec
Sample Input 1:
1
7
1 2 3 4 5 6 7
2
Sample Output 1:
3 4 5 6 7 1 2
Sample Input 2:
2
7
1 2 3 4 5 6 7
0
4
1 2 3 4
2
Sample Output 2:
1 2 3 4 5 6 7
3 4 1 2*/
public class RotateArray {
	public static void main(String[] args) 
    {
	    Scanner s=new Scanner(System.in);
	    int t,d;
	    int[] arr;
	    System.out.println("No of Test cases");
	    t=s.nextInt();
	    for(int i=1;i<=t;i++)
	    {
	        arr=input();
	        d=s.nextInt();
	        rotate(arr,d);
	        print(arr);
	    }
	    
    }
	
	public static int [] input() 
    {
        Scanner s=new Scanner(System.in);
        System.out.println("Size of array");
        int n=s.nextInt();
        int arr[]=new int[n];
        for(int i=0;i<=n-1;i++)
        {
        	System.out.println("Element at index "+i);
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
	public static int[] reverse(int [] arr,int s,int e) 
    {
        int temp;
        while(s<e)
        {
            temp=arr[s];
            arr[s]=arr[e];
            arr[e]=temp;
            s++;
            e--;
        }
        return arr;

    }

    public static void rotate(int[] arr, int d) {
    	//Your code goes here
        int n=arr.length;
        if(d>n)
            d%=n;
        arr=reverse(arr,0,n-1);
        arr=reverse(arr,0,n-1-d);
        arr=reverse(arr,n-d,n-1); 
    }
}
