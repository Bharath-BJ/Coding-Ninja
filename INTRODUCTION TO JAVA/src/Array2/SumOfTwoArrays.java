package Array2;

import java.util.Scanner;

/*
 * Sum of Two Arrays
Send Feedback
Two random integer arrays/lists have been given as ARR1 and ARR2 of size N and M respectively. Both the arrays/lists contain numbers from 0 to 9(i.e. single digit integer is present at every index). The idea here is to represent each array/list as an integer in itself of digits N and M.
You need to find the sum of both the input arrays/list treating them as two integers and put the result in another array/list i.e. output array/list will also contain only single digit at every index.
Note:
The sizes N and M can be different. 

Output array/list(of all 0s) has been provided as a function argument. Its size will always be one more than the size of the bigger array/list. Place 0 at the 0th index if there is no carry. 

No need to print the elements of the output array/list.
Using the function "sumOfTwoArrays", write the solution to the problem and store the answer inside this output array/list. The main code will handle the printing of the output on its own.
Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains an integer 'N' representing the size of the first array/list.

Second line contains 'N' single space separated integers representing the elements of the first array/list.

Third line contains an integer 'M' representing the size of the second array/list.

Fourth line contains 'M' single space separated integers representing the elements of the second array/list.
Output Format :
For each test case, print the required sum of the arrays/list in a row, separated by a single space.

Output for every test case will be printed in a separate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^5
0 <= M <= 10^5
Time Limit: 1 sec 
Sample Input 1:
1
3
6 2 4
3
7 5 6
Sample Output 1:
1 3 8 0
Sample Input 2:
2
3
8 5 2
2
1 3
4
9 7 6 1
3
4 5 9
Sample Output 2:
0 8 6 5
1 0 2 2 0 /
 */
public class SumOfTwoArrays {
	public static void sum(int [] arr1,int[] arr2,int[] output) // while loop is the best wayto solve this problem coz using which only we can iterate on 3 arrays in the same time
    {//Here input parameters received and input parameters passed not neccessorily be same
        int m=arr1.length,n=arr2.length,o=output.length,i=m-1,j=n-1,k=o-1;
        int sum=0,carry=0;
        while (j >= 0)
        {
            sum = arr1[i] + arr2[j] + carry;
            output[k] = (sum % 10);
            carry = sum / 10;
            k--;
            i--;
            j--;
        }
        while (i >= 0)
        { 
            sum = arr1[i] + carry;
            output[k] = (sum % 10);
            carry = sum / 10;
            i--;
            k--;
        }
        if(carry==1)
        {
            output[k]=carry;   
        }
        print(output);
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
	    
	 public static void main(String[] args) {
	        Scanner s=new Scanner(System.in);
	        int arr1[],arr2[],output[];
	        int t=s.nextInt();
	        for(int i=1;i<=t;i++)
	        {
	            arr1=input();
	            arr2=input();
	            int m=arr1.length;
	            int n=arr2.length,o;
	            if(m>=n)
	            {o=m+1;
	                output = new int[o]; 
	                sum(arr1,arr2,output);}       // Here we use largest array as 1st array for iteration in the function
	            else{o=n+1;
	                output = new int[o]; 
	                sum(arr2,arr1,output);}
	        }
	    }
}
