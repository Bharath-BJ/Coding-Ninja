package ComplexNumbers;
import java.util.Scanner;
public class ComplexUse {
	public static void main(String[] args) 
    {
        Scanner s=new Scanner(System.in);
        int real1 = s.nextInt();
		int imaginary1 = s.nextInt();

		int real2 = s.nextInt();
		int imaginary2 = s.nextInt();

		ComplexNumber c1 = new ComplexNumber(real1, imaginary1);
		ComplexNumber c2 = new ComplexNumber(real2, imaginary2);
        ComplexNumber c3= ComplexNumber.plus(c1, c2);
        c3.print();
		// int choice = s.nextInt(); 
		// if(choice == 1) {
		// 	c1.plus(c2);
		// 	c1.print();
		// }
		// else if(choice == 2) {
		// 	c1.multiply(c2);
		// 	c1.print();
		// }
		// else {
		// 	return;
		// }
    }
}
