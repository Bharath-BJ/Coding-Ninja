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
//		quickSort1(input);
		quickSort2(input,0,n-1);
		for(int i=0;i<n;i++)
		{
			System.out.print(input[i]+" ");
		}
		
	}
	
	// First approach is to use extra array
	public static void quickSort1(int[] input) {
        if(input.length<=1)
            return;
        int pi=partition1(input);
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
        quickSort1(b);
        quickSort1(c);
        for(int i=0;i<pi;i++)
        {
            input[i]=b[i];
        }
        for(int j=pi+1;j<input.length;j++)
        {
            input[j]=c[j-pi-1];
        }
		
	}
	public static int partition1(int [] input) 
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
	
	// Second approach is to use starting and ending index to avoid using extra array
		public static void quickSort2(int[] input,int si, int ei)
		{
			if(si>ei)
				return;
			int pi=partition2(input,si,ei);
			quickSort2(input,si,pi-1);
			quickSort2(input,pi+1,ei);	
		}
	public static int partition2(int[] input,int si,int ei)
	{
		int pivotElement=input[si],count=0;
		for(int i=si+1;i<=ei;i++)
		{
			if(input[i]<pivotElement)
				count++;
		}
		int temp=input[si+count];
		input[si+count]=input[si];
		input[si]=temp;
		
		int i=si,j=ei;
		while(i<j)
		{
			if(input[i]<pivotElement)
				i++;
			else if(input[j]>=pivotElement)
				j--;
			else
			{
				temp=input[i];
				input[i]=input[j];
				input[j]=temp;
				i++;
				j--;
			}
		}
	return si+count;
	}
	
}
