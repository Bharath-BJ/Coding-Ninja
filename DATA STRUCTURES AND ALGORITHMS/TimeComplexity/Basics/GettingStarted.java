package Basics;

import java.util.Scanner;

/*
 * There are two main complexity measures of the efficiency of an algorithm:
● Time complexity is a function describing the amount of time an algorithm
takes in terms of the amount of input to the algorithm, where No of operation used as a proxy for time
● Space complexity is a function describing the amount of memory (space) an
algorithm takes in terms of the amount of input to the algorithm.
*/
public class GettingStarted {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		add(s);
		forLoop(s);
		doubleLoop(s);
		/*
		 * This way we can get many possible Time complexity analysis as follows:
		 * T(n)= k1 + k2n;
		 * T(n)= k1 + k2n + k3n^2;
		 * T(n)= k1 + k2n + k3n^2 + k4logn
		 * We will learn Big(O) notation in the next lecture*/
	}
	
	private static void forLoop(Scanner s) {
		int n=s.nextInt();		// assignment 1 operation
		int sum=0;				// assignment 1 operation
		for(int i=0;i<n;i++)
		{
			sum+=i;				// Updating the sum 1 operation for n times 
		}
		System.out.println(sum);  //printing 1 operation
		/* Totally here 3 constant operations and 'n' times updation operations was done
		 * T(n)= 3+ n;
		 * T(n)= k+n;
		 * */
	}
	
	private static void doubleLoop(Scanner s) {
		int n=s.nextInt();		// assignment 1 operation
		int sum=0;				// assignment 1 operation
		for(int i=0;i<n;i++)
		{
			for(int j=0;j<n;j++)
			{
				sum+=i+j;				// Updating the sum 1 operation for n*n times 
			}
		}
		System.out.println(sum);  //printing 1 operation
		/* Totally here 3 constant operations and 'n*n' times updation operations was done
		 * T(n)= 3+ n^2;
		 * T(n)= k+n^2;
		 * */
	}
	
	private static void add(Scanner s)
	{
		int n1=s.nextInt();		// assignment 1 operation
		int n2=s.nextInt();		// assignment 1 operation
		int sum;				
		sum=n1+n2;				// Addition 1 operation
		System.out.println(sum);// printing 1 operation
		/* Totally here 4 operations were carried out and so we can say constant no of operations done
		 * T(n)=4;
		 * T(n)=k;
		 */
	}

}
