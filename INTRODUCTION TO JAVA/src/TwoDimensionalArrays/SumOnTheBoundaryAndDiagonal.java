package TwoDimensionalArrays;

import java.util.Scanner;

/*
 * Total Sum on the Boundaries and Diagonals
Send Feedback
For a given two-dimensional square matrix of size (N x N). Find the total sum of elements on both the diagonals and at all the four boundaries.
Input format:
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains a single integer value, 'N' representing the 'rows' and 'columns' for the two-dimensional square matrix.

Second line onwards, the next 'N' lines or rows represent the ith row values.

Each of the ith row constitutes 'N' column values separated by a single space.
Output format:
For each test case, print the single integer denoting the sum.

Output for every test case will be printed in a seperate line.
Constraints:
1 <= t <= 10^2
0 <= N <= 10^3
Time Limit: 1sec
Sample input 1:
1
3
1 2 3
4 5 6
7 8 9
Sample Output 1:
45
Explanation for Sample Output 1:
The boundary elements are 1, 2, 3, 6, 9, 8, 7 and 4. 

The first-diagonal elements are 1, 5 and 9. 

The second-diagonal elements are 3, 5 and 7.

We just need to add all these numbers making sure that no number is added twice. For example, '1' is both a boundary element and a first-diagonal element similarly, '5' contributes to both the diagonals but they won't be added twice.

Hence, we add up, [1 + 2 + 3 + 6 + 9 + 8 + 7 + 4 + 5] to give 45 as the output.
Sample input 2:
2
5
1 2 3 4 5
6 7 8 9 10
11 12 13 14 15
16 17 18 19 20
21 22 23 24 25
4
1 2 3 10
4 5 6 11
7 8 9 12
13 14 15 16
Sample Output 2:
273
136/
 */
public class SumOnTheBoundaryAndDiagonal {
    public static int [][] input() 
    {
        Scanner s=new Scanner(System.in);
        int i,j,rows,cols;
        rows=cols=s.nextInt();
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
    public static void totalSum1(int[][] mat) 
    {   // Method 1 is my way using the principle of the spiral form to find boundaries and using remaining elements to find diagonals that are excluded from the boundaries
        
         int rows=mat.length,i,j,sum=0,rs=0,cs=0,re=rows-1;
         if(rows==0)
         {
             System.out.print(0);
             return;
         }
         int cols=mat[0].length,ce=cols-1;
         for(i=cs;i<=ce;i++)
         {
             sum+=mat[rs][i];
         }
         rs=rs+1;
         for(i=rs;i<=re;i++)
         {
             sum+=mat[i][ce];
         }
         ce=ce-1;
         for(i=ce;i>=cs;i--)
         {
             sum+=mat[re][i];
         }
         re=re-1;
         for(i=re;i>=rs;i--)
         {
             sum+=mat[i][cs];
         }
         cs=cs+1;
         for(i=rs;i<=re;i++)
         {
             for(j=cs;j<=ce;j++)
             {
                 if(i==j)
                 {
                     sum+=mat[i][j];
                 }
                 else if(i+j== re+1)    
                 {
                     sum+=mat[i][j];
                 }
             }
        }
        
    	System.out.print(sum+" ");
	}
    public static void totalSum2(int[][] mat) 
    {
    	int N=mat.length;
    	int requiredSum=0;
    	//Method 2 is from Geeksforgeeks which is the best way to approach this problem in minimalistic code
        for (int i = 0; i < N; i++) 
        {
            for (int j = 0; j < N; j++) 
            {
                if (i == j || (i + j) == N - 1) {
                    requiredSum += mat[i][j];
                }
                else if (i == 0 || j == 0 || i == N - 1|| j == N - 1) {
                    requiredSum += mat[i][j];
                }
            }
        }
        System.out.print(requiredSum+" ");
    }
    public static void main(String[] args) 
    {
        Scanner s=new Scanner(System.in);
        int i,t=s.nextInt(),mat[][];
        for(i=1;i<=t;i++)
        {
            mat=input();
            totalSum1(mat);
            totalSum2(mat);
        }    
    }
}
