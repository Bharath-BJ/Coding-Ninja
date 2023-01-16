package Test2;

import java.util.Scanner;

/*
 * Print 2D Array
Send Feedback
Given a 2D integer array with n rows and m columns. Print the 0th row from input n times, 1st row n-1 times…..(n-1)th row will be printed 1 time.
Input format :
Line 1 : No of rows (n) and no of columns (m) (separated by single space)
Line 2 : Row 1 elements (separated by space)
Line 3 : Row 2 elements (separated by space)
Line 4 : and so on
Sample Input 1:
3 3
1 2 3
4 5 6
7 8 9
Sample Output 1 :
1 2 3
1 2 3
1 2 3
4 5 6
4 5 6
7 8 9/
 */
public class PrintArrayThisWay {
	public static void print2DArray(int [][] input) 
    {
        int rows=input.length,cols=input[0].length,i,j,k;
        for(i=0;i<rows;i++)
        {
            for(j=1;j<=rows-i;j++)
            {
                for(k=0;k<cols;k++)
                {
                    System.out.print(input[i][k]+" ");
                }
                System.out.print("\n");
            }
        }
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
	        int i,t=s.nextInt(),input[][];
	        for(i=1;i<=t;i++)
	        {
	            input=input();
	            print2DArray(input);
	        }    
	 }
}
