package Basics;

import java.util.Scanner;

public class Examples {

	public static void main(String[] args) {
		Scanner s= new Scanner(System.in);
		bubbleSort();
		int n=s.nextInt();
		factorial(s,n);
		n=s.nextInt();
		factorialRecur(s,n,1);
		mergeSort();
		quickSort();
		
	}
	private static void quickSort() {
		// refer code in DSA > Recursion > Recursion2
		/* Remember to consider only the max auxillary space required not total space 
		 * For every call temp array created then recursive calls done for each halfs
		 * So S(n)= n + n/2 + n/4 + n/8 .....
		 * S(n) = n(1 + 1/2 + 1/4 + 1/8 .....)
		 * S(n) = 2n => O(n) 
		 * */
		
	}
	private static void mergeSort() {
		// refer code in DSA > Recursion > Recursion2
		/* Here calculating the max no of calls in stack assuming the pivot element selected is not mid element
		 * S(n) = kx
		 * (3/4)^x = 1
		 * taking log on both sides
		 * log4/3 n = x;
		 * x= log2 n/ log2 4/3 
		 * x = 3.47 log2 n
		 * S(n) = klog n => O(log n)

		 * * */
		
	}
	private static void factorialRecur(Scanner s,int n,int ans) {
		if(n==0)
		{
			System.out.println("Factorial using recursion : "+ans);
			return;
		}
		factorialRecur(s, n-1, ans*n);
		/* Here n is the only variable used, but considering the recursive calls 
		 * totally at that time n+1 calls will be the max no of calls in stack 
		 * So S(n)=k(n+1) => O(n)
		 * */
		
	}
	private static void factorial(Scanner s,int n) {
		int ans=1;
		int i=1;
		while(i<=n)
		{
			ans*=i;
			i++;
		}
		System.out.println(ans);
		/* Here variable ans & i are extra space which doesn't vary wrt to input size(n)
		 * So S(n)=kn^0 => O(1)
		 * */
		
	}

	private static void bubbleSort() {
		// refer code in Intro to JAVA > Array2
		/* So there variable i,j are extra space used 
		 * which does not increase wrt input size(n)
		 * So S(n)=kn^0 => O(1)
		 * */
	}

}
