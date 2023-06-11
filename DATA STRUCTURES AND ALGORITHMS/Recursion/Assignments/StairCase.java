package Assignments;

import java.util.Scanner;

public class StairCase {

	public static void main(String[] args) {
		Scanner s = new Scanner(System.in);
		int input=s.nextInt();
		System.out.println(staircase(input));
	}
	 public static int staircase(int n){
		 if(n == 0)
			 return 1;
	     else if(n < 0)
	        return 0;
	return staircase(n-3) + staircase(n-2) + staircase(n-1);
	}
}
