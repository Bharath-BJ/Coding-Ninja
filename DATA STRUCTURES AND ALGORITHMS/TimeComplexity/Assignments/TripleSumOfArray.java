package Assignments;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Scanner;
/*
 * Triplet sum
Send Feedback
You have been given a random integer array/list(ARR) and a number X. Find and return the triplet(s) in the array/list which sum to X.
Note :
Given array/list can contain duplicate elements.
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the first array/list.

Second line contains 'N' single space separated integers representing the elements in the array/list.

Third line contains an integer 'X'.
Output format :
For each test case, print the total number of triplets present in the array/list.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^3
0 <= X <= 10^9

Time Limit: 1 sec
Sample Input 1:
1
7
1 2 3 4 5 6 7 
12
Sample Output 1:
5
Sample Input 2:
2
7
1 2 3 4 5 6 7 
19
9
2 -5 8 -6 0 5 10 11 -3
10
Sample Output 2:
0
5


 Explanation for Input 2:
Since there doesn't exist any triplet with sum equal to 19 for the first query, we print 0.

For the second query, we have 5 triplets in total that sum up to 10. They are, (2, 8, 0), (2, 11, -3), (-5, 5, 10), (8, 5, -3) and (-6, 5, 11)*/
public class TripleSumOfArray {

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
	        int sum=s.nextInt();
	        System.out.println(tripletSum3(arr,sum));
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
	public static int tripletSum1(int[] arr, int num)
	{
		 int n=arr.length,count=0;
		 Arrays.sort(arr);
		 for(int i=0;i<arr.length-3;i++)
		 {   
			 int fi=i+1,ei=n-1;
			 while(fi<ei)
			 {
				 if((arr[i]+arr[fi]+arr[ei]) < num)
					 fi++;
				 else if((arr[i]+arr[fi]+arr[ei]) > num)
					 ei--;
				 else
				 {
					 fi++;
					 ei--;
					 count++;
				 }
			 }
		 }
	return count;
	}	  
   public static int tripletSum2(int[] arr, int num)
   {
       int n= arr.length;
       HashMap<Integer, Integer> occ = new HashMap<Integer, Integer>(n); 
       for (int i = 0; i < n; i++) 
           occ.put(arr[i], i); 
       int count = 0; 
       for (int i = 0; i < n - 1; i++) 
       { 
           for (int j = i + 1; j < n; j++) 
           {  
               if ((arr[i] * arr[j] <= num) && (arr[i] * arr[j] != 0) && (num % (arr[i] * arr[j]) == 0)) 
               { 
                   int check = num/ (arr[i] * arr[j]); 
                   occ.containsKey(check); 
                   if (check != arr[i] && check != arr[j] && occ.containsKey(check) && occ.get(check) > i && occ.get(check) > j) 
                   count++; 
               } 
           } 
       } 
       return count; 
   }
   public static int tripletSum3(int[] arr,int num) // My own method
   {
       HashMap<Integer,Integer> hm=new HashMap<>();
       int count=0,temp;
       for(int i=0;i<arr.length;i++)
           hm.put(arr[i],i);
       for(int i=0;i<arr.length;i++)
       {
           for(int j=i+1;j<arr.length;j++)
           {
               temp=num-arr[i]-arr[j];
               if(hm.containsKey(temp) ){
                   count++;
                   System.out.println(arr[i]+" "+arr[j]+" "+temp);
               }
           }
       }
   return count;
   }

}
