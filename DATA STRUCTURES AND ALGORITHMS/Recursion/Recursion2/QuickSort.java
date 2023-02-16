package Recursion2;

import java.util.Scanner;

public class QuickSort {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		int n= s.nextInt();
		int[] input=new int[n];
		for(int i=0;i<n;i++)
		{
			input[i]=s.nextInt();
		}
		quickSort(input);
		for(int i=0;i<n;i++)
		{
			System.out.print(input[i]+" ");
		}
	}
	public static int partition(int [] input) 
    {
        int pivotElement=input[0];
        int count=0;
        for(int i=1;i<input.length;i++)
        {
            if(input[i] < pivotElement)
            {
                count++;
            }
        }
        int temp1=input[count];
        input[count]=pivotElement;
        input[0]=temp1;
        int i=0,j=input.length-1;
        while(i<j)
        {
            if(input[i] < pivotElement)
            {
                i++;
            }
            else if(input[j]>=pivotElement)
            {
                j--;
            }
            else
            {
                int temp2=input[i];
                input[i]=input[j];
                input[j]=temp2;
                i++;
                j--;
            }
        }
    return count;
    }
	public static void quickSort(int[] input) {
        if(input.length<=1)
            return;
        int pi=partition(input);
        int [] b=new int[pi];
        int [] c=new int[input.length-b.length-1];
        for(int i=0;i<pi;i++)
        {
            b[i]=input[i];
        }
        for(int j=pi+1;j<input.length;j++)
        {
            c[j-pi-1]=input[j];
        }
        quickSort(b);
        quickSort(c);
        for(int i=0;i<pi;i++)
        {
            input[i]=b[i];
        }
        for(int j=pi+1;j<input.length;j++)
        {
            input[j]=c[j-pi-1];
        }
		
	}
}
