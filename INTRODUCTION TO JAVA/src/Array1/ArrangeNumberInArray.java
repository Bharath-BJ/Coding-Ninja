package Array1;

import java.util.Scanner;

/*
 * Arrange Numbers In Array
Send Feedback
You have been given an empty array(ARR) and its size N. The only input taken from the user will be N and you need not worry about the array.
Your task is to populate the array using the integer values in the range 1 to N(both inclusive) in the order - 1,3,5,.......,6,4,2.
Note:
You need not print the array. You only need to populate it.
Input Format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

The first and the only line of each test case or query contains an integer 'N'.
Output Format :
For each test case, print the elements of the array/list separated by a single space.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^4

Time Limit: 1sec
Sample Input 1 :
1
6
Sample Output 1 :
1 3 5 6 4 2
Explanation of Sample Input 1 :
Since the value of N is 6, the number will be stored in the array in such a fashion that 1 will appear at 0th index, then 2 at the last index, in a similar fashion 3 is stored at index 1. Hence the array becomes 1 3 5 6 4 2.
Sample Input 2 :
2
9
3
Sample Output 2 :
1 3 5 7 9 8 6 4 2
1 3 2/
 */
public class ArrangeNumberInArray {
	public static void arrange1(int []arr,int n) 
    {
		  // Method 1 is bit longer and complicated than I feel
		int i,p1=1,p2;
        if(n==0)
	        return;
        if(n%2==1)
        {
            for(i=0;i<=n/2;i++)
            {
                arr[i]=p1;
                p1+=2;
            }
            p2=p1-3;
            for(i=i;i<=n-1;i++)
            {
                arr[i]=p2;
                p2=p2-2;
            }
        }
        else
        {
            for(i=0;i<=n/2-1;i++)
            {
                arr[i]=p1;
                p1+=2;
            }
            p2=p1-1;
            for(i=i;i<=n-1;i++)
            {
                arr[i]=p2;
                p2=p2-2;
            }
        }
        for(i=0;i<=n-1;i++)
        {
            System.out.print(arr[i]+" ");
        }
    }
	public static void arrange2(int []arr,int n) 
	    {
	        int i,p1=1,p2;
	       
	        // Method 2 was a suggestion from CN which looks more succinct and to the point I feel
	        if(n==0)
		        return;
	        for(i=0;i<=(n-1)/2;i++)
	        {
	            arr[i]=p1;
	            p1+=2;
	        }
	        // System.out.println(i);
	        if(n%2==1)
	            p2=n-1;
	        else
	            p2=n;
	        for(i=(n-1)/2+1;i<=n-1;i++)
	        {
	            arr[i]=p2;
	            p2-=2;
	        }
	        for(i=0;i<=n-1;i++)
	        {
	            System.out.print(arr[i]+" ");
	        }
	    }
	
	public static void arrange3(int[] arr,int n) // Easiest approach from CN solution
	 {
		 int start=0;
		 int end=n-1;
		 int counter=1;
		 while(start<=end)
		 {
			 if(counter%2==1)
			 {
				 arr[start]=counter;
				 counter++;
				 start++;
			 }
			 else
			 {
				 arr[end]=counter;
				 counter++;
				 end--;
			 }
		 }
		 for(int i=0;i<=n-1;i++)
	        {
	            System.out.print(arr[i]+" ");
	        }
	 }
	    public static void main(String[] args) 
	    {
	    int t,n;
	    // int arr[];
	    Scanner s=new Scanner(System.in);
	    t=s.nextInt();
	    for(int i=1;i<=t;i++)
	    {
	        
	        n=s.nextInt();
	        int arr[]=new int[n];
	        arrange1(arr,n);
	        System.out.println();
	        arrange2(arr,n);
	        System.out.println();
	        arrange2(arr,n);
	    }
	    
	}
}
