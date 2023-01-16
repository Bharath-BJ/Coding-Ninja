package Test2;

import java.util.Scanner;
import java.util.Stack;
/*
 * Leaders in array
Send Feedback
Given an integer array A of size n. Find and print all the leaders present in the input array. An array element A[i] is called Leader, if all the elements following it (i.e. present at its right) are less than or equal to A[i].
Print all the leader elements separated by space and in the same order they are present in the input array.
Input Format :
Line 1 : Integer n, size of array
Line 2 : Array A elements (separated by space)
Output Format :
 leaders of array (separated by space)
Constraints :
1 <= n <= 10^6
Sample Input 1 :
6
3 12 34 2 0 -1
Sample Output 1 :
34 2 0 -1
Sample Input 2 :
5
13 17 5 4 6
Sample Output 2 :
17 6/
 */
public class LeaderInArray {
	public static void leaders1(int[] input) // Time Complexity is O(n2)
    {
        int n=input.length,i,j;
        
        for(i=0;i<n;i++)
        {
            boolean isleader=true;
            for(j=i;j<n;j++)
            {
                if(input[i]< input[j])
                {
                    isleader=false;
                }
            }
            if(isleader)
            {
                System.out.print(input[i]+" ");
            }
        }    
    }
	public static void leaders2(int[] input) // This method is from geeksforgeeks, Time Complexity is O(n)
	{
		 int n=input.length;
         Stack<Integer> stack = new Stack<Integer>();
         // We know last element is definitely gonna be a leader
         stack.push(input[n - 1]);
         for (int i = n - 2; i >= 0; i--) {
             if (input[i] >= stack.peek()) {
                 stack.push(input[i]);
             }
         }
         while (!stack.empty()) {
             System.out.print(stack.pop() + " ");
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
    public static void main(String[] args) 
    {
        Scanner s=new Scanner(System.in);
        int input[];
        int i,t=s.nextInt();
        for(i=1;i<=t;i++)
        {
            input=input();
            leaders1(input);
            leaders2(input);
        }
    }
}
