package PolynomialEqn;

public class Polynomial {
	 int [] DA;
	    public Polynomial()
	    {
	        DA = new int[5];  
	    }
	    public void setCoefficient(int degree, int coeff) 
	    {
	        if(degree >= DA.length)
	        {
	            increaseCapacity(degree);
	        }
	        DA[degree]=coeff;
	    }
	    public int [] increaseCapacity(int degree)
	    {
	        int [] temp = DA;
	        DA= new int [degree+1];
	        for(int i =0; i< temp.length; i++)
	        {
	            DA[i] =temp[i];
	        }
	        return DA;
	    }
	    public Polynomial add(Polynomial p2) 
	    {
	        Polynomial p3= new Polynomial();
	        if(this.DA.length < p2.DA.length)
	        {
	            this.increaseCapacity(p2.DA.length-1);
	        }
	        else
	        {
	            p2.increaseCapacity(this.DA.length-1);
	        }
	        for(int i=0;i<this.DA.length;i++)
	        {
	            for(int j=0;j<p2.DA.length;j++)
	            {
	                if(i==j)
	                {
	                    p3.setCoefficient(i,this.DA[i]+ p2.DA[j]);
	                }
	            }
	        }
	    return p3;
	    }
	    public Polynomial subtract(Polynomial p2) 
	    {
	        Polynomial p3= new Polynomial();
	        if(this.DA.length < p2.DA.length)
	        {
	            this.increaseCapacity(p2.DA.length-1);
	        }
	        else
	        {
	            p2.increaseCapacity(this.DA.length-1);
	        }
	        for(int i=0;i<this.DA.length;i++)
	        {
	            for(int j=0;j<p2.DA.length;j++)
	            {
	                if(i==j)
	                {
	                    p3.setCoefficient(i,this.DA[i]- p2.DA[j]);
	                }        
	            }
	        }
	    return p3;
	    }
	    public Polynomial multiply(Polynomial p2)
	    {
	        Polynomial p3 = new Polynomial();
	        int n=this.DA.length,m=p2.DA.length;
	        int [] temp= new int [n+m-1];
	        for(int i=0;i<n;i++)
	        {
	                for(int j=0;j<m;j++)
	                {
	                    temp[i+j]+=this.DA[i]*p2.DA[j];
	                }
	        }
	    p3.DA=temp;
	    return p3;
	    }
	    public void print()
	    {
	       for(int i=0;i<this.DA.length;i++ )
	       {
	            if(this.DA[i] !=0)
	            {
	                System.out.print(this.DA[i]+"x"+i+" ");
	            }
	            // System.out.print(DA[i]);
	            // if (i != 0) 
	            // {
	            //     System.out.print("x^" + i);
	            // }
	            // if (i != DA.length - 1) 
	            // {
	            //     System.out.print(" + ");
	            // }
	       }
	       
	       System.out.print("\n");
	    }
}
