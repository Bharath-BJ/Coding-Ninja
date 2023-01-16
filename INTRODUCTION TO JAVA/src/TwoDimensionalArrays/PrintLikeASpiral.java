package TwoDimensionalArrays;

import java.util.Scanner;
/*
 * Print Spiral
Send Feedback
For a given two-dimensional integer array/list of size (N x M), print it in a spiral form. That is, you need to print in the order followed for every iteration:
a. First row(left to right)
b. Last column(top to bottom)
c. Last row(right to left)
d. First column(bottom to top)
 Mind that every element will be printed only once.
Refer to the Image:
Spiral path of a matrix

Input format :
The first line contains an Integer 't' which denotes the number of test cases or queries to be run. Then the test cases follow.

First line of each test case or query contains two integer values, 'N' and 'M', separated by a single space. They represent the 'rows' and 'columns' respectively, for the two-dimensional array/list.

Second line onwards, the next 'N' lines or rows represent the ith row values.

Each of the ith row constitutes 'M' column values separated by a single space.
Output format :
For each test case, print the elements of the two-dimensional array/list in the spiral form in a single line, separated by a single space.

Output for every test case will be printed in a seperate line.
Constraints :
1 <= t <= 10^2
0 <= N <= 10^3
0 <= M <= 10^3
Time Limit: 1sec
Sample Input 1:
1
4 4 
1 2 3 4 
5 6 7 8 
9 10 11 12 
13 14 15 16
Sample Output 1:
1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10 
Sample Input 2:
2
3 3 
1 2 3 
4 5 6 
7 8 9
3 1
10
20
30
Sample Output 2:
1 2 3 6 9 8 7 4 5 
10 20 30 /
 */
public class PrintLikeASpiral {
	public static void printSpiral(int[][] mat) //RS for rowStart,CS for columnStart,RE for rowEnd,CE for columnEnd
    {   
        int rows=mat.length,i,counter=0,rs=0,cs=0,re=rows-1;
        if(rows==0)
        {
            return;
        }
        int cols=mat[0].length,ce=cols-1;
        while(counter<rows*cols) // Also we can use rs<re && cs<ce as a condition
        {
            for(i=cs;i<=ce;i++)
            {
                System.out.print(mat[rs][i]+" ");
                counter++;
            }
            rs=rs+1;
            for(i=rs;i<=re;i++)
            {
                System.out.print(mat[i][ce]+" ");
                counter++;
            }
            ce=ce-1;
            for(i=ce;i>=cs;i--)
            {
                System.out.print(mat[re][i]+" ");
                counter++;
            }
            re=re-1;
            for(i=re;i>=rs;i--)
            {
                System.out.print(mat[i][cs]+" ");
                counter++;
            }
            cs=cs+1;
        }

    }
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
    
        
    public static void main(String[] args) {
        Scanner s=new Scanner(System.in);
        int i,t=s.nextInt(),mat[][];
        for(i=1;i<=t;i++)
        {
            mat=input();
            printSpiral(mat);
        }    
    }
}	
