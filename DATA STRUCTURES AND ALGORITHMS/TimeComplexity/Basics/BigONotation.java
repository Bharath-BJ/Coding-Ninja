package Basics;

import java.util.Scanner;

/*
 * Big(O)Notation describes the set of all algorithms that run no worse than a certain speed (it's an upper bound or maximum time an algorithm takes)
Conversely, Big Ω describes the set of all algorithms that run no better than a certain speed (it's a lower bound or minimum time an algorithm takes)
Finally, Big Θ describes the set of all algorithms that run at a certain speed (it's like equality & average time takes)* /
 */
public class BigONotation {

	public static void main(String[] args) {
		Scanner s=new Scanner(System.in);
		constantTimeAlgorithm();
		logarithmicTimeAlgorithm(s);
		linearTimeAlgorithm(s);
		NLogNTimeAlgorithm();
		PolynomialTimeAlgorithm(s);
		ExponentialTimeAlgorithm(s);
		FactorialTimeAlgorithm(s);
	}
	 static int factorial(int n){    
		  if (n == 0)    
		    return 1;    
		  else    
		    return(n * factorial(n-1));    
		 }    
	private static void FactorialTimeAlgorithm(Scanner s) {
		int n=s.nextInt(),sum=0;
		for(int i=0;i<factorial(n);i++)
		{
			System.out.println(i);    // constant operation for n! times
		}
		// T(n) = k * n!
		// O(n!) worst of all time complexity
	}

	private static void ExponentialTimeAlgorithm(Scanner s) {
		int n=s.nextInt(),sum=0;
		for(int i=0;i<Math.pow(2, n);i++)
		{
			System.out.println(i);    // constant operation for k^n times
		}
		// T(n) = k * k*n
		// O(k^n)
	}

	private static void PolynomialTimeAlgorithm(Scanner s) {
		int n=s.nextInt(),sum=0;
		for(int i=0;i<n;i++)
		{
			for(int j=0;j<n;j++)
			{
				sum+=i+j;         // constant operation for n * n times
			}
		}
		System.out.println(sum);
		
	// T(n)=k*n^2
	// O(n^2)
	}

	private static void NLogNTimeAlgorithm() {
		// In applies for both merge or Quick sort : refer code in the DSA >Recursion> Recursion2 
		// Merge sort 
		/*  1. Splitting the array into two parts by iteration so constant operation for 'n' times
		 *  2. Then recursion call for both the half arrays 
		 *  So reccurence relation,
		 *  T(n)= (k1+k2)n + 2T(n/2)
		 *  T(n/2)= (k1+k2)n + 2T(n/4)
		 *  T(n/4)= (k1+k2)n + 2T(n/8)
		 *  T(n/8)= (k1+k2)n + 2T(n/16)
		 *  ......
		 *  T(1)= k
		 *  After substitution,
		 *  
		 *  T(n)= (kn)x
		 *  
		 *  n/2^x=1
		 *  n=2^x
		 *  
		 *  Taking log on both sides,
		 *  log n = x
		 *  
		 *  T(n)= kn*log n = n* log n;
		 *  
		 * 
		 */
	}

	private static void linearTimeAlgorithm(Scanner s) {
		int n=s.nextInt();
		for (int i = 0; i < n; i++) {
		    System.out.println("Hey - I'm busy looking at: " + i);
		}
		/*
		 * What we do know is that the simple algorithm presented above will grow linearly with the size of its input.*/
		
	}

	private static void logarithmicTimeAlgorithm(Scanner s) {
		int[] sortedArray=input();
		int key=s.nextInt(); 
		int low=0;
		int high=sortedArray.length-1;
		int index = Integer.MAX_VALUE;
		while (low <= high) {
	        int mid = low  + ((high - low) / 2);
	        if (sortedArray[mid] < key) 
	            low = mid + 1;
	        else if (sortedArray[mid] > key) 
	            high = mid - 1;
	        else if (sortedArray[mid] == key) {
	            index = mid;
	            break;
	        }
	    }    
		System.out.println(index);
		/* Logarithmic time is the next quickest. Unfortunately, they're a bit trickier to imagine.
		 * T(n)= k1 + T(n/2);
		 * T(n)= k1 + T(n/4);
		 * T(n)= k1 + T(n/8);
		 * T(n)= k1 + T(n/16);
		 * .
		 * .
		 * .
		 * T(1)=k (return to prev function)
		 * T(n)=kx;
		 * 
		 * n/2,n/2^2,n/2^3,n/2^4 ....... 1
		 * 
		 * n/2^x = 1   , taking log on both sides
		 * x= logn;
		 * 
		 * So T(n)=klogn;
		 * */
	}

	private static void constantTimeAlgorithm() {
		int n = 1000;
		System.out.println("Hey - your input is: " + n);
		System.out.println("Hmm.. I'm doing more stuff with: " + n);
		System.out.println("And more: " + n);
		/* Clearly, it doesn't matter what n is, above. This piece of code takes a constant amount of time to run. 
		 * It's not dependent on the size of n. We denote constant time algorithms as follows:
		 * O(1). Note that O(2), O(3) or even O(1000) would mean the same thing.
		 * */
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

}
