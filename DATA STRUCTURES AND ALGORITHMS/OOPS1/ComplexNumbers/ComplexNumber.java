package ComplexNumbers;

public class ComplexNumber {
	int real,imaginary;
    public ComplexNumber(int real1,int imaginary1)
    {
        this.real=real1;
        this.imaginary=imaginary1;
    }
    public void plus(ComplexNumber c2)
    {
        this.real=this.real+c2.real;
        this.imaginary=this.imaginary+c2.imaginary;
    }  
    public void multiply(ComplexNumber c2)
    {
        int temp=this.real;   // Here after updation of real part of complex number first ,error occurs in finding the imaginary part that's why temp variable is used                                     
        this.real=this.real*c2.real - this.imaginary*c2.imaginary;
        this.imaginary=this.imaginary*c2.real + temp*c2.imaginary;
    }  
    public static ComplexNumber plus(ComplexNumber c1,ComplexNumber c2)
    {
        int newreal=c1.real+c2.real;
        int newimaginary=c1.imaginary+c2.imaginary;
        ComplexNumber c3= new ComplexNumber(newreal, newimaginary);
        return c3;
    }  
    public void print()
    {
        System.out.print(real+" "+"+"+" "+"i"+imaginary);
    }
}
