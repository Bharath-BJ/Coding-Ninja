package TwoDimensionalArrays;

import java.util.Scanner;

/*
 * Largest Row or Column
Send Feedback
For a given two-dimensional integer array/list of size (N x M), you need to find out which row or column has the largest sum(sum of all the elements in a row/column) amongst all the rows and columns.
Note :
If there are more than one rows/columns with maximum sum, consider the row/column that comes first. And if ith row and jth column has the same largest sum, consider the ith row as answer.
Input Format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains two integer values, 'N' and 'M', separated by a single space. They represent the 'rows' and 'columns' respectively, for the two-dimensional array/list.

Second line onwards, the next 'N' lines or rows represent the ith row values.

Each of the ith row constitutes 'M' column values separated by a single space.
Output Format :
For each test case, If row sum is maximum, then print: "row" <row_index> <row_sum>
OR
If column sum is maximum, then print: "column" <col_index> <col_sum>
It will be printed in a single line separated by a single space between each piece of information.

Output for every test case will be printed in a seperate line.
 Consider :
If there doesn't exist a sum at all then print "row 0 -2147483648", where -2147483648 or -2^31 is the smallest value for the range of Integer.
Constraints :
1 <= t <= 10^2
1 <= N <= 10^3
1 <= M <= 10^3
Time Limit: 1sec/
 */
public class LargestRowOrColumnSum {
	public static void findLargest(int [][] mat) 
	{
	        int rows=mat.length,i,j,sum,largest1=Integer.MIN_VALUE,index=0;
	        if(rows==0)
	        {
	            System.out.print("row"+index+" "+largest1);
	            return;
	        }
	        int cols=mat[0].length;
	        for(i=0;i<rows;i++)
	        {
	            sum=0;
	            for(j=0;j<cols;j++)
	            {
	                sum+=mat[i][j];
	            }
	           if(largest1<sum)
	           {
	               largest1=sum;
	               index=i;
	           }
	        }
	        String str="row"+" "+index+" "+largest1;
	        int largest2=largest1;
	        for(j=0;j<cols;j++)
	        {
	            sum=0;
	            for(i=0;i<rows;i++)
	            {
	                sum+=mat[i][j];
	            }
	           if(largest2<sum)
	           {
	               largest2=sum;
	               index=j;
	           }
	        }
	        if(largest1<largest2)
	        {
	            str="col"+" "+index+" "+largest2;
	        }
	    System.out.println(str);
	}
	public static int [][] input() 
    {
        Scanner s=new Scanner(System.in);
        int i,j,rows=s.nextInt(),cols=s.nextInt();
        int mat[][]=new int [rows][cols];
        if(rows==0 || cols==0)
        {
            return mat;
        }
        for(i=0;i<rows;i++)
        {
            for(j=0;j<cols;j++)
            {
                mat[i][j]=s.nextInt();
            }
        }  
        return mat; 
    }
   
    public static void main(String[] args) 
    {
        Scanner s=new Scanner(System.in);
        int i,t=s.nextInt(),mat[][];
        for(i=1;i<=t;i++)
        {
            mat=input();
            findLargest(mat);
        }    
    }
}
