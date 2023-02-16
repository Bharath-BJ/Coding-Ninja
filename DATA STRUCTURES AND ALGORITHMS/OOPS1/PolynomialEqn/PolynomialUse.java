package PolynomialEqn;

import java.util.Scanner;

public class PolynomialUse {
	public static void main(String[] args) 
	{
	    Scanner s = new Scanner(System.in);


	    int n = s.nextInt();
		int degree1[] = new int[n];
		for(int i = 0; i < n; i++)
	    {
			degree1[i] = s.nextInt();
		}
		int coeff1[] = new int[n];
		for(int i = 0; i < n; i++)
	    {
			coeff1[i] = s.nextInt();
		}
	    Polynomial p1 = new Polynomial();
	    for(int i = 0; i < n; i++)
	    {
	        p1.setCoefficient(degree1[i],coeff1[i]);
	    }
	    p1.print();


	    n = s.nextInt();
	    int degree2[] = new int[n];
		for(int i = 0; i < n; i++)
	    {
			degree2[i] = s.nextInt();
		}
		int coeff2[] = new int[n];
		for(int i = 0; i < n; i++)
	    {
			coeff2[i] = s.nextInt();
		}
	    Polynomial p2 = new Polynomial();
	    for(int i = 0; i < n; i++)
	    {
	        p2.setCoefficient(degree2[i],coeff2[i]);
	    }
	    p2.print();

	    // p1.add(p2);
	    // p1.print();

	    // p1.subtract(p2);
	    // p1.print();

	    // p1.multiply(p2);
	    // p1.print();
	    int choice = s.nextInt();
			Polynomial p3;
			switch(choice){
			// Add
			case 1: 
				 p3 = p1.add(p2);
				p3.print();
				break;
			// Subtract	
			case 2 :
				 p3 = p1.subtract(p2);
				p3.print();
				break;
			// Multiply
			case 3 :
				p3 =p1.multiply(p2);
				p3.print();
				break;
			}

	}
}
